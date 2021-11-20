import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcell',
  templateUrl: './newcell.component.html',
  styleUrls: ['./newcell.component.css']
})
export class NewcellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formGroup: any;
  key: any;
  private value: any;
  columnName: string;
  private rowId: number;

  agInit(params: any) {
    this.columnName = params.column.colDef.headerName;
    this.key = params.context.createKey(params.columnApi, params.column);
    this.value = params.value;
    this.rowId = params.node.id;
  }

  refresh(params: any): boolean {
    this.formGroup = params.context.formGroup;

    // this could also be done in GridComponent.createFormControls, but the cell component could be doing something with
    // the value, so it feels more natural that the control value be set here
    this.formGroup.controls[this.key].patchValue(this.value);

    return true;
  }

}
