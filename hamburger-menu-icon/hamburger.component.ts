import { Component, OnInit } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular'

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements IHeaderAngularComp {

  params:any
  rowData: any;
  agInit(params:any) {
    this.params = params
    this.rowData = this.params.context.rowData
  
  }
  refresh(): boolean {
    return true

  }
  simpleFunction(){
    this.params.newValue(this.params)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
