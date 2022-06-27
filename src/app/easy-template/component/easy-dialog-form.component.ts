import { EasyForm } from '../model/form/easy-form';
import { EasyDialogComponent } from './easy-dialog.component';

export class EasyDialogFormComponent extends EasyDialogComponent {

  public form: EasyForm;
  public title: string = 'Dialog';

  public onSubmit(): void {
    if (!this.trySubmitForms(this.form)) {
      this.toast('Please check the form and try again');
      return;
    }
    this.sendRequest();
  }

  public onCancel(): void {
    this.onClose();
  }

  public sendRequest(): void {
    this.toast('sendRequest: Not Implemented');
  }

  public getSubmitLabel(): string {
    return 'Submit';
  }

  public override setLoading(loading: boolean) {
    if (this.form != null) {
      if (loading) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    }
    super.setLoading(loading);
  }
}
