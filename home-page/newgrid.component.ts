import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Column, ColumnApi, GridApi, GridReadyEvent, RowNode } from "ag-grid";
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewcellComponent } from '../cell-index/newcell.component';
import { DialogComponent } from '../dialog-box/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-newgrid',
  templateUrl: './newgrid.component.html',
  styleUrls: ['./newgrid.component.css']
})
export class NewgridComponent implements OnInit {
  private api: GridApi;
  private columnApi: ColumnApi;



  innings = [{ innings: "India 1st innings" }, { innings: "India 2nd innings" }]

  players = [
    { playername: "Rohit Sharma" },
    { playername: "KL Rahul" },
    { playername: "Cheteshwar Pujara" },
    { playername: "Virat Kohli(c)" },
    { playername: "Ajinkya Rahane" },
    { playername: "Rishabh Pant" },
    { playername: "Ravindra Jadeja" },
    { playername: "Mohammed Shami" },
    { playername: "Mohammaj Siraj" },
    { playername: "Ishant Sharma" },
    { playername: "Jasprit Bumrah" },
    { playername: "Rory Burns" },
    { playername: "Haseeb Hameed" },
    { playername: "Dawid Malan" },
    { playername: "Joe Root(c)" },
    { playername: "Jonny Bairstow" },
    { playername: "Jos Buttler" },
    { playername: "Moeen Ali" },
    { playername: "Sam Curran" },
    { playername: "Craig Overton" },
    { playername: "Ollie Robinson" },
    { playername: "James Anderson" },
  ]



  columnDefs: any;
  columnDefs_1: any;
  columnDefs_2: any;
  rowData: any;
  rowData_1: any = [];
  rowData_2: any = [];
  eMenuButton: any;
  constructor(public dialog: MatDialog, public fb: FormBuilder, public commmon: CommonService
  ) {
    this.columnDefs = [


      { headerName: 'runs', field: "runs", cellRenderer: 'newcell' },
      { headerName: 'balls faced', field: "balls", cellRenderer: 'newcell' },
      { headerName: 'fours', field: "fours", cellRenderer: 'newcell' },
      { headerName: 'sixes', field: "sixes", cellRenderer: 'newcell' },
      {
        headerName: 'button', field: "button", headerComponentParams: {
          template:
            ' <button style="margin-top: 10px; float: right;" mat-raised-button type="submit" [disabled]="gridForm.invalid" > add       </button>'

        }
      }
    ];
    this.columnDefs_1 = [
      {
        headerName: "India 1st innings batting", children: [
          { headerName: 'Innings', field: "innings", editable: true, width: 145 },
          {
            headerName: 'playername', field: "playername", width: 170, editable: true,
            cellEditor: 'agRichSelectCellEditor',
            cellEditorParams: {
              cellHeight: 50,
              values: ['Rohit Sharma', 'KL Rahul', 'Cheteshwar Pujara', 'Virat Kohli(c)', 'Ajinkya Rahane', 'Rishabh Pant', 'Ravindra Jadeja', 'Mohammed Shami', 'Ishant Sharma', 'Jasprit Bumrah', 'Mohammed Siraj'],
            }
          },
          { headerName: 'runs', field: "runs", editable: true, width: 130 },
          { headerName: 'balls faced', field: "balls", editable: true, width: 145 },
          { headerName: 'fours', field: "fours", editable: true, width: 120 },
          { headerName: 'sixes', field: "sixes", editable: true, width: 120 },
          {
            headerName: 'SR', editable: true, width: 120, valueGetter:
              function (params: any) {
                return params.data.strikerate
              },
          },
          { headerName: "action",
            autoHeight: true,
            headerComponent: 'myHeaderComponent',
            components: {
              agColumnHeader:' CustomHeader',
            },
            headerComponentParams: { menuIcon: 'fa-external-link-alt' },

            colId: "button"

          }

        ]
      }

    ]
    this.columnDefs_2 = [
      {
        headerName: "India 2nd innings batting", children: [
          { headerName: 'Innings', field: "innings", editable: true, width: 145 },
          {
            headerName: 'playername', field: "playername", width: 170, editable: true,
            cellEditor: 'agRichSelectCellEditor',
            cellEditorParams: {
              cellHeight: 50,
              values: ['Rohit Sharma', 'KL Rahul', 'Cheteshwar Pujara', 'Virat Kohli(c)', 'Ajinkya Rahane', 'Rishabh Pant', 'Ravindra Jadeja', 'Mohammed Shami', 'Ishant Sharma', 'Jasprit Bumrah', 'Mohammed Siraj'],
            }
          },
          {
            headerName: 'runs', field: "runs", editable: true, width: 130
          },
          { headerName: 'balls faced', field: "balls", editable: true, width: 145 },
          { headerName: 'fours', field: "fours", editable: true, width: 120 },
          { headerName: 'sixes', field: "sixes", editable: true, width: 120 },
          {
            headerName: 'SR', editable: true, width: 120, valueGetter:
              function (params: any) {

                return ((params.data.runs * 100) / params.data.balls).toFixed(2)
              },
          },
          {
            headerName: "action", width: 100,
            cellRenderer: this.actionCellRenderer,
            editable: false,
            colId: "action"
          }
        ]
      }

    ]
  }
  agParams: any
  onMenuClickListener: any
    getCustomComponents() {
    //return { 'formCell': FormCellComponent };
  }


  myHeaderComponent(agParams: any) {
    this.agParams = agParams
    let eGui = document.createElement('div');
    eGui.innerHTML = `
          <button></button>`
    this.eMenuButton = eGui.querySelector('.customHeaderMenuButton');
    if (this.agParams.enableMenu) {
      this.onMenuClickListener = this.onMenuClick.bind(this);

      this.eMenuButton.addEventListener('click', this.onMenuClickListener);
    } else {
      eGui.removeChild(this.eMenuButton);
    }
  }
  onMenuClick() {
    this.thisDialog()
  }



  thisDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  onCellClickedEvent(params: any) {
    if (params.column.colId === "button") {
      this.thisDialog();
    }
  }
  componentButton() {
    let eGui = document.createElement("div");
    eGui.innerHTML = `
    <button (click)="thisDialog()">Form</button>`
    return eGui;
  }

  onCellClicked(params: any) {
    if (params.column.colId === "action") {
      let action = params.event.target.dataset.action;
      if (action === "delete") {
        params.api.applyTransaction({
          remove: [params.node.data]


        });
        var items = JSON.parse(localStorage.getItem("instanceStorage_2"));

        for (var i = 0; i < items.length; i++) {
          if (items.indexOf(items[i]) == params.node.id) {

            items.splice(i, 1);
            this.emptyArray_2.splice(i, 1)

          }
        }
        items = JSON.stringify(items);

        localStorage.setItem("instanceStorage_2", items);
        this.rowData_2 = JSON.parse(localStorage.getItem("instanceStorage_2"))
      }
    }
  }
  actionCellRenderer(params: any) {

    let eGui = document.createElement("div");
    eGui.innerHTML =

      `    <button
          class="action-button delete"
          data-action="delete">
              delete
        </button>
                `;


    return eGui;
  }

  gridForm: FormGroup;
  ngOnInit(): void {
    this.gridForm = this.fb.group({
      innings: new FormControl(),
      playername: new FormControl(),

    });
    this.rowData = [
      { runs: null, balls: null, fours: null, sixes: null },
    ]




  }
  emptyArray_2: any = [];
  emptyArray_1: any = [];
  n: any = 0;
  onSubmit() {

    if (this.gridForm.value.innings === "India 1st innings") {
      this.gridForm.value.strikerate =
        ((this.gridForm.value.runs * 100) / this.gridForm.value.balls).toFixed(2)
      this.emptyArray_1.push(this.gridForm.value)
      localStorage.setItem("instanceStorage_1", JSON.stringify(this.emptyArray_1))
      this.rowData_1 = JSON.parse(localStorage.getItem("instanceStorage_1"))

    } else if (this.gridForm.value.innings === "India 2nd innings") {
      this.gridForm.value.gridId = this.n;

      this.gridForm.value.strikerate =
        ((this.gridForm.value.runs * 100) / this.gridForm.value.balls).toFixed(2)


      this.emptyArray_2.push(this.gridForm.value)
      localStorage.setItem("instanceStorage_2", JSON.stringify(this.emptyArray_2))
      this.rowData_2 = JSON.parse(localStorage.getItem("instanceStorage_2"))
      this.n = this.n + 1;
    }


  }
  refreshFormControls() {
    if (this.api) {
      this.createFormControls();
      this.api.refreshCells({ force: true });
    }
  }
  onResize(event : any){
    
  }

  getContext() {
    return {
      formGroup: this.gridForm,
      createKey: this.createKey
    }
  }
  ongridReady(params: any) {
    this.api = params.api,
      this.columnApi = params.columnApi
  }

  gridReady(params: any) {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.refreshFormControls();

    this.api.sizeColumnsToFit();
  }
  public createFormControls() {
    let columns = this.columnApi.getAllColumns();
    console.log("column", columns)


    this.api.forEachNode((rowNode: RowNode) => {
      columns
        .forEach((column: Column) => {
          const key = this.createKey(this.columnApi, column);
          this.gridForm.addControl(<any>key, new FormControl());
          console.log("key", key)
        });
    });


  }

  private createKey(columnApi: ColumnApi, column: Column): any {
    console.log("INDEX", columnApi.getAllColumns().indexOf(column))
    if ((columnApi.getAllColumns().indexOf(column)) === 0) {
      return "runs"
    } else if ((columnApi.getAllColumns().indexOf(column)) === 1) {
      return "balls"
    } else if ((columnApi.getAllColumns().indexOf(column)) === 2) {
      return "fours"
    } else if ((columnApi.getAllColumns().indexOf(column)) === 3) {
      return "sixes"
    }

  }
  getComponents() {
    return { 'newcell': NewcellComponent };
  }


}


