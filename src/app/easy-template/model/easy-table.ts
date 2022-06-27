import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Action } from '../../budget/model/action';
import { EasyStringUtil } from '../service/easy-string.util';
import { AppRoute } from './app-route';

export class EasyTable {


  private actions: Array<Action> = [];
  private columns: Array<string>;
  private data: Array<any>;
  protected customData: any;
  protected loading: boolean;

  public projectId: string;
  public matDataSource: MatTableDataSource<any>;
  public matPaginator: MatPaginator;
  public matSort: MatSort;


  constructor() {
    this.matDataSource = new MatTableDataSource();
    this.onInit();
  }

  public onInit(): void {
  }


  public hasLoaded(): boolean {
    return !this.loading;
  }

  public setActions(actions: Array<Action>): void {
    this.actions = actions;
    this.initActionColumn();
  }

  public getActions(): Array<Action> {
    return this.actions == null ? [] : this.actions;
  }

  public setLoading(loading: boolean): void {
    this.loading = loading;
  }

  public setCustomData(customData: any): void {
    this.customData = customData;
  }

  public setColumns(columns: Array<any>): void {
    this.columns = columns;
    this.initActionColumn();
  }

  public getColumns(): Array<string> {
    return this.columns == null ? [] : this.columns;
  }

  public getColumnClasses(columnName: string): Array<string> {
    return [];
  }

  public getData(): Array<any> {
    return this.data == null ? [] : this.data;
  }

  public setData(data: Array<any>): void {
    this.data = data;
    this.matDataSource.data = data;
  }

  public getColumnHeader(column: string): any {
    return EasyStringUtil.toTitleCase(column);
  }

  public getColumnRoute(row: any, columnName: string): AppRoute {
    return null;
  }

  public getColumnValue(row: any, columnName: string): any {
    return row[columnName];
  }

  public setMat(paginator: MatPaginator, sort: MatSort) {
    this.matDataSource.paginator = paginator;
    this.matDataSource.sort = sort;
  }

  protected initActionColumn(): void {
    if (this.columns.find(c => c == 'action') != null) {
      return;
    }
    if (this.getActions().length > 0) {
      this.columns.push('action');
    }
  }
}
