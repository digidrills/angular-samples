import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';
import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog-box/dialog.component';



@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})

export class AgGridComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  dialogRef: any;

  private gridApi: any;
  private gridColumnApi: any;
  bat: any = [];
  bowler: any = [];
  newvalue: any;
  arr: any = 3;
  rowData_Ind1stBat: any;
  rowData_Eng1stBowl: any;
  rowData_Ind2ndBat: any;
  rowData_Eng2ndBowl: any;
  rowData_Eng1stBat: any;
  constructor(private http: HttpClient,
    private common: CommonService,
    public dialog: MatDialog
  ) {

  }
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  updateCell() {
    var rowNode = this.gridApi.getRowNode(1);
    rowNode.setDataValue("runs", 100)
  }


  columnDefs_1stIndBat = [{
    headerName: 'India 1st innings', children: [
      { headerName: 'Innings', field: 'innings', hide: true, rowGroup: true },
      { headerName: 'batting', field: 'playername' },
      {
        headerName: 'runs', field: 'runs', aggFunc: 'sum'

      },

      { headerName: 'balls faced', field: 'balls', editable: true },
      { headerName: 'fours', field: 'fours', },
      { headerName: 'sixes', field: 'sixes' },
      { headerName: 'strikerate', field: 'strikerate' }
    ]
  }
  ]
  columnDefs_1stEngBat = [{
    headerName: 'India 1st innings', children: [
      { headerName: 'Innings', field: 'innings', hide: true, rowGroup: true },
      { headerName: 'batting', field: 'playername' },
      {
        headerName: 'runs', field: 'runs', aggFunc: 'sum',

      },

      { headerName: 'balls faced', field: 'balls' },
      { headerName: 'fours', field: 'fours', },
      { headerName: 'sixes', field: 'sixes' },
      { headerName: 'strikerate', field: 'strikerate' }
    ]
  }
  ]
  columnDefs_2ndIndBat = [{
    headerName: 'India 2nd innings', children: [
      { headerName: 'Innings', field: 'innings', hide: true },
      { headerName: 'batting', field: 'playername' },
      { headerName: 'runs', field: 'runs' },
      { headerName: 'balls faced', field: 'balls' },
      { headerName: 'fours', field: 'fours', },
      { headerName: 'sixes', field: 'sixes' },
      { headerName: 'strikerate', field: 'strikerate' }
    ]
  }
  ]
  columnDefs_2 = [{ headerName: 'Innings', field: 'innings', hide: true },
  { headerName: 'bowling', field: 'playername' },
  { headerName: 'overs bowled', field: 'overs', editable: true },
  { headerName: 'runs conceded', field: 'runs' },
  { headerName: 'maidens', field: 'maidens', },
  { headerName: 'wickets', field: 'wicket' },
  { headerName: 'economy', field: 'economy' }];

  ngOnInit() {
    this.rowData_Ind1stBat = this.common.batsmanArrayInd1st;
    this.rowData_Eng1stBowl = this.common.bowlerArrayEng1st;
    this.rowData_Ind2ndBat = this.common.batsmanArrayInd2nd;
    this.rowData_Eng2ndBowl = this.common.bowlerArrayEng2nd;
    this.rowData_Eng1stBat = this.common.batsmanArrayEng1st;

  }

  defaultColDef = {
    sortable: true,
    resizable: true,
    filter: 'agTextColumnFilter',
  };
  groupIncludeTotalFooter = true;
  groupIncludeFooter = true;
  rowSelection = 'single';
  innings: any = [];

  onRowClicked(event: any) {
    this.innings.push(event.data)
    var num = this.rowData_Ind2ndBat.length;

    for (let n = 0; n < num; n++)
      if (event.data.playername === this.rowData_Ind2ndBat[n].playername) {
        this.innings.push(this.rowData_Ind2ndBat[n]);
      }
    localStorage.setItem("demoObject", JSON.stringify(this.innings))
    this.innings.splice(0, this.innings.length)
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  autoGroupColumnDef = {
    headerName: 'Innings',
    cellRendererParams: {
      suppressCount: true,
    },
  
  };


  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => {
      if (node.groupData) {
        return { innings: node.key, runs: '' };
      }
      else {
        return node.data;
      }
    });
    const selectedDataStringPresentation = selectedData.map(node => `${node.innings} ${node.runs}`).join();

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}



