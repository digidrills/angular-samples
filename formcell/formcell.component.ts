import { Component ,Input} from '@angular/core';
import { FormArray, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form-cell',
  template: `
        <div *ngIf="formGroup" [formGroup]="formGroup">
            <mat-form-field [floatLabel]="'never'" style="width: 100%">
                <input matInput [formControlName]="key" [id]="key" placeholder="Enter {{columnName}}">
            </mat-form-field>
            
        </div>
    `
})
export class FormCellComponent {
  formGroup: any;
  key:any;
  private value:any;
  columnName: string;
  private rowId: number;

  agInit(params: any) {
    this.columnName = params.column.colDef.headerName;
    this.key = params.context.createKey(params.columnApi, params.column);
    this.value = params.value;
    this.rowId = params.node.id;
  }

  refresh(params: any): boolean {
    this.formGroup = params.context.formGroup.controls[this.rowId];

    this.formGroup.at(this.key).patchValue(this.value);

    return true;
  }
}
