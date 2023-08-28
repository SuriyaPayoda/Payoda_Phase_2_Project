import { NgModule } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
 
  imports: [],
  exports:[MatCardModule,MatDialogModule,MatButtonModule,MatDividerModule,
    MatPaginatorModule,MatTabsModule,MatSelectModule,MatRadioModule,MatDatepickerModule,
  MatSidenavModule,MatToolbarModule,MatIconModule,MatSnackBarModule]
})
export class MaterialModule { }
