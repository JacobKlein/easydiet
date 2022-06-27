import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class EasyComponentData {

  public cd?: ChangeDetectorRef;
  public route?: ActivatedRoute;
  public dialogData?: any;
}
