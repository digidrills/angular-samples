import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './innings-details/ag-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './tab-input/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CommonService } from './common.service';
import 'ag-grid-enterprise';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from './dialog-box/dialog.component';
import { StatisticsComponent } from './searchbox/statistics.component';
import { Grid } from 'ag-grid-community';
import { FormCellComponent } from './formcell/formcell.component';
import { GridComponent } from './employee-forms-in-cells/grid.component';
import { BranchService } from './branch.service';
import { NewgridComponent } from './home-page/newgrid.component';
import { NewcellComponent } from './cell-index/newcell.component';
import { CustomHeaderComponent } from './more-vert-icon/custom-header.component';
import { HamburgerComponent } from './hamburger-menu-icon/hamburger.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SearchComponent } from './charts/search.component';


import { AgChartsAngularModule } from 'ag-charts-angular';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import { DiagramModule, BpmnDiagramsService } from '@syncfusion/ej2-angular-diagrams';
import { NgxComponent } from './ngx-flowgraph/ngx.component';


@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    HomeComponent,

    DialogComponent,
    StatisticsComponent,
    FormCellComponent,
    GridComponent,
    NewgridComponent,
    NewcellComponent,
    CustomHeaderComponent,
    
    HamburgerComponent,
    SearchComponent,
    NgxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([FormCellComponent]),
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMomentDateModule,
    AgChartsAngularModule,
    NgxGraphModule,
    DiagramModule  ,
    
  ],
  providers: [
    CommonService,
    BranchService ,
    BpmnDiagramsService

  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
