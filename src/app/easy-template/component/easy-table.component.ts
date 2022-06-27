import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { CommonComponent } from '../../budget/component/common/common.component';
import { EasyTable } from '../model/easy-table';

@Component({
  selector: 'easy-table',
  templateUrl: 'easy-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EasyTableComponent extends CommonComponent {

  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  @Input() public table: EasyTable;
  @Output() public onRowAction: EventEmitter<any> = new EventEmitter<any>();


  constructor(protected override route: ActivatedRoute, protected override cd: ChangeDetectorRef) {
    super();
  }

  public ngAfterViewInit(): void {
    this.table.setMat(this.matPaginator, this.matSort);
  }

  public getTableColumns(): Array<string> {
    return this.table.getColumns().filter(c => c !== 'action');
  }

  public onClickAction(action: any, row: any): void {
    this.onRowAction.emit({action: action, data: row});
  }

}

