import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DiscoverComponent } from './discover/discover.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NavuserComponent } from './navuser/navuser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CdetailpopComponent } from './cdetailpop/cdetailpop.component';
import { FilterComponent } from './filter/filter.component';
import {MatDividerModule} from '@angular/material/divider';



import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JobstatusComponent } from './jobstatus/jobstatus.component';
import { MatTableModule } from '@angular/material/table';
import { CNavComponent } from './c-nav/c-nav.component';
import { CApplistComponent } from './c-applist/c-applist.component';
import { CAddjobComponent } from './c-addjob/c-addjob.component';
import { CAddprofilepopComponent } from './c-addprofilepop/c-addprofilepop.component';
import { CUserdetailpopComponent } from './c-userdetailpop/c-userdetailpop.component';
import { CProfileComponent } from './c-profile/c-profile.component';
import { HelppageComponent } from './helppage/helppage.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CFilterComponent } from './c-filter/c-filter.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { CardstestComponent } from './cardstest/cardstest.component';
import { CarddetailtestComponent } from './carddetailtest/carddetailtest.component';
import { MatNativeDateModule } from '@angular/material/core';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent, 
    DiscoverComponent, UserprofileComponent, NavuserComponent, CdetailpopComponent, FilterComponent,JobstatusComponent, CNavComponent, CApplistComponent, CAddjobComponent, CAddprofilepopComponent, CUserdetailpopComponent, CProfileComponent, HelppageComponent, CFilterComponent, EditDialogComponent, DeleteDialogComponent, CardstestComponent, CarddetailtestComponent,
    ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
    MatMenuModule,
    MatNativeDateModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
