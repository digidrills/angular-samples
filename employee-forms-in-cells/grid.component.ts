import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";

import { Column, ColumnApi, GridApi, GridReadyEvent, RowNode } from "ag-grid";
import { BranchService } from "../branch.service";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-grid',
  template: `
        <div class="container"
              fxLayout="column" fxLayoutAlign="start center">
                  <mat-form-field class="dealership-field">
                <mat-select placeholder="Branch" (selectionChange)="updateForm()" [(value)]="selectedBranch">
                    <mat-option *ngFor="let branch of branchNames" [value]="branch">
                        {{ branch }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <form class="dealership-form"
                  fxLayout="column" fxLayoutAlign="start center"
                  (ngSubmit)="onSubmit()" [formGroup]="gridForm">               
                <ag-grid-angular style="width: 1000px; height: 600px;" class="ag-theme-alpine"
                                [rowData]="rowData"
                                [columnDefs]="columnDefs"
                                [frameworkComponents]="getComponents()"
                                [context]="getContext()"
                                (rowDataChanged)="refreshFormControls()"
                                (gridReady)="gridReady($event)">
                </ag-grid-angular>
                <button style="margin-top: 10px; float: right;"
                        mat-raised-button [disabled]="!gridForm.valid"
                        type="submit">Submit
                </button>
            </form>
        </div>
      <div class="container" fxLayout="column" fxLayoutAlign="start center">
      <ag-grid-angular style="width: 1000px; height: 600px;" class="ag-theme-alpine" [rowData]="rowData_"
    [columnDefs]="columnDefs_"
        >
</ag-grid-angular>
      </div>
    `,
  styles: [
    `
            .container {
                height: 700px;
            }
            .dealership-form {
                width: 100%;
                height: 100%;
            }
            .dealership-field {
                width: 300px;
            }
        `
  ]
})
export class GridComponent {
  //value set
  columnDefs_ = [
    {headerName:"Player",field:"playername"},
    {headerName:"runs",field:"runs"},
    {headerName:"balls",field:"balls"},
    {headerName:"fours",field:"fours"},
    {headerName:"sixes",field:"sixes"},
  ]
  rowData_:any;
  private api: GridApi;
  private columnApi: ColumnApi;

  // this cannot be null - create it with no controls instead
  gridForm:FormGroup= new FormGroup({
    innings: new FormControl,
    stock: new FormGroup({})
  });

  branchNames: string[];
  selectedBranch: string;

  columnDefs: any;
  rowData: any;
  emptyObject: any = [];



  constructor(public snackBar: MatSnackBar,
    private branchService: BranchService) {

    this.columnDefs = [
      { headerName: 'playername', field: "playername", cellRenderer: 'formCell' },
      { headerName: 'runs', field: "runs", cellRenderer: 'formCell' },
      { headerName: 'balls faced', field: "balls", cellRenderer: 'formCell' },
      { headerName: 'fours', field: "fours", cellRenderer: 'formCell' },
      { headerName: 'sixes', field: "sixes", cellRenderer: 'formCell' }
    ];

    this.branchNames = this.branchService.branches;
    this.selectedBranch = this.branchNames[0];
    this.updateForm();
  }

  updateForm() {
    const currentBranch = this.branchService.getBranchData(this.selectedBranch);
    this.rowData = currentBranch.stock;
  }

  refreshFormControls() {
    if (this.api) {
      // slight chicken and egg here - the grid cells will be created before the grid is ready, but
      // we need set formGroup up front
      // as such we'll create the grid (and cells) and force refresh the cells
      // FormCellComponent will then set the form in the refresh, completing the loop
      // this is only necessary once, on initialisation
      this.createFormControls();
      this.api.refreshCells({ force: true });
    }
  }

  gridReady(params: any) {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.refreshFormControls();

    this.api.sizeColumnsToFit();
  }

  private createFormControls() {
    let columns = this.columnApi.getAllColumns();

    const stockGroup = (<FormGroup>this.gridForm.controls['stock']);

    // clear out old form group controls if switching between branches
    let controlNames = Object.keys(stockGroup.controls);
    controlNames.forEach((controlName) => {
      stockGroup.removeControl(controlName)
    });
    
    
    this.api.forEachNode((rowNode: RowNode) => {
      const formArray: FormArray = new FormArray([]);
      columns
        .forEach((column: Column) => {
          const key = this.createKey(this.columnApi, column); // the cells will use this same createKey method
          formArray.setControl(<any>key, new FormControl());
        });

      stockGroup.addControl(<any>rowNode.id, formArray);
    });
  }

  //getRowNodeId(data: any) {
  // optional here - ag-Grid will create row ids if you don't supply one, but
  // if you have a way of uniquely identifying rows here's where you'd do it.
  // doing so would make it easier to pull out specific rows from the form,
  // say by order number, as we do here
  // return data.orderNumber;
  //}

  getComponents() {
    //return { 'formCell': FormCellComponent };
  }

  getContext() {
    return {
      formGroup: this.gridForm.controls.stock,
      createKey: this.createKey
    }
  }
  onSubmit() {

    this.emptyObject.push(this.gridForm.value)
    this.snackBar.open("Open Console for Form State", null, {
      verticalPosition: "top",
      duration: 2000
    });
  }

  private createKey(columnApi: ColumnApi, column: Column): any {

    return columnApi.getAllColumns().indexOf(column);
  }
}