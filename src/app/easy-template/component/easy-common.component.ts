import { ChangeDetectorRef, Component, HostBinding, isDevMode } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComponentState } from '../model/component-state';
import { EasyForm } from '../model/form/easy-form';
import { AppInjector } from '../service/easy-app-initializer.service';
import { EasyDialogService } from '../service/easy-dialog.service';
import { EasyErrorUtil } from '../service/easy-error.util';
import { EasyToastService } from '../service/easy-toast.service';

@Component({template: ''})
export abstract class EasyCommonComponent {

  protected state: ComponentState = new ComponentState();
  protected subscriptions: Array<Subscription> = [];
  protected params: Params;
  // Overridden Services
  protected route: ActivatedRoute;
  protected cd: ChangeDetectorRef;
  // Injected Services
  protected toastService: EasyToastService;
  protected dialogService: EasyDialogService;


  @HostBinding('className') public componentClass: string;
  public componentClasses: Array<string> = [];

  protected constructor() {
    this.toastService = AppInjector.get(EasyToastService);
    this.dialogService = AppInjector.get(EasyDialogService);
  }

  // =============================== LifeCycle ==================================//
  public ngOnInit(): void {
    if (this.route == null) {
      this.afterParamLoad();
      return;
    }
    this.subscriptions.push(this.route.params.subscribe((params) => {
      this.params = params;
      this.afterParamLoad();
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  public ignoreDraggable(event: any): void {
    event.stopPropagation();
  }

  public afterParamLoad(): void {
    this.initCommonParams();
    this.initParams();
    this.initClasses();
    this.setClasses();
    this.onInit();
  }

  public onInit(): void {
  }

  protected initClasses(): void {
  }

  protected setClasses(): void {
    this.componentClass = this.componentClasses.join(' ');
  }

  // ============================= Form =================================== //
  public trySubmitForms(...forms: Array<EasyForm>): boolean {
    forms.forEach(form => {
      form.markAsTouched();
      if (form.formGroup.errors != null) {
        console.error('FORM', form.formGroup.errors);
      }
      Object.keys(form.formGroup.controls).forEach(key => {
        const control = form.formGroup.get(key);
        if (control != null && !control.valid) {
          console.error(key, form.formGroup.get(key)?.errors);
        }
      });
    });

    return forms.find(f => !f.isValid()) == null;
  }

  // ============================= Exception =================================== //
  public hasException(): boolean {
    return this.state.exception != null;
  }

  public getException(): any {
    return EasyErrorUtil.getErrorMessage(this.state.exception);
  }

  public setException(exception: any): void {
    console.error(exception);
    this.state = {loading: this.state.loading, exception: exception};
    this.markForCheck();
  }

  // ============================= Loading =================================== //
  public isLoading(): boolean {
    return this.state.loading && this.state.exception == null;
  }

  public hasLoaded(): boolean {
    return !this.state.loading && this.state.exception == null;
  }

  public setLoading(loading: boolean): void {
    this.state = {loading: loading, exception: this.state.exception};
    this.markForCheck();
  }

  // ============================= Interface =================================== //
  protected toast(msg: string): void {
    if (this.toastService == null) {
      alert(msg);
      return;
    }
    this.toastService.toast(msg);
  }

  protected toastError(error: any): void {
    console.error(error);
    const msg = EasyErrorUtil.getErrorMessage(error);
    if (this.toastService == null) {
      return;
    }
    this.toastService.toast(msg);
  }

  protected markForCheck(): void {
    if (this.cd == null) {
      if (isDevMode()) {
        console.warn('markForCheck: ChangeDetectionRef is null');
      }
      return;
    }
    this.cd.markForCheck();
  }

  // =============================== Misc ======================================//
  protected addSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  public getState(): ComponentState {
    return this.state;
  }

  protected initCommonParams(): void {
  }

  protected initParams(): void {
  }

  protected getRouteParam(param: string): any {
    if (this.params == null) {
      console.error(`getRouteParam(component: ${this.constructor.name}, param: ${param}): Params are null`);
      return null;
    }
    return this.params[param];
  }

  protected unsubscribe(subscription: Subscription): void {
    if (subscription != null) {
      subscription.unsubscribe();
    }
  }

  protected devLog(...msg: any): void {
    if (!isDevMode()) {
      return;
    }
    console.log('[DEV]', this.constructor.name, ...msg);
  }
}
