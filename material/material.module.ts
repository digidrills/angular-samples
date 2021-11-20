import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


const MaterialComponents = [
  MatButtonModule,
  MatSelectModule,
  MatSliderModule,
  MatInputModule,
  MatGridListModule,
  MatFormFieldModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatDialogModule,
  MatSnackBarModule,
  MatIconModule,
  MatMenuModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatMomentDateModule

]

@NgModule({

  imports: [MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  exports: [MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMomentDateModule
  ]
})
export class MaterialModule { }
