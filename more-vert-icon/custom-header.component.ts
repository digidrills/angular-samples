import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements ICellRendererAngularComp {
  params: any;
  columnDef: any
  rowData: any
  
  agInit(params: any) {
    this.params = params   
    this.columnDef = this.params.context.columnDef
    this.rowData = this.params.context.rowData
  }
  refresh(): boolean {
    return true
  }
}