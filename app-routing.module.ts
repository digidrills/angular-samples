import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgGridComponent } from './innings-details/ag-grid.component';
import { GridComponent } from './employee-forms-in-cells/grid.component';
import { HomeComponent } from './tab-input/home.component';
import { NewgridComponent } from './home-page/newgrid.component';
import { NgxComponent } from './ngx-flowgraph/ngx.component';
import { SearchComponent } from './charts/search.component';
import { StatisticsComponent } from './searchbox/statistics.component';

const routes: Routes = [
  { path: '', component: NewgridComponent },

  { path: 'home', component: HomeComponent },
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'search', component: SearchComponent },
  { path: 'ngx', component: NgxComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
