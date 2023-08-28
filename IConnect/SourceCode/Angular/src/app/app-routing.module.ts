import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DiscoverComponent } from './discover/discover.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { JobstatusComponent } from './jobstatus/jobstatus.component';

import { CApplistComponent} from './c-applist/c-applist.component';
import { CAddjobComponent} from './c-addjob/c-addjob.component';
import { CProfileComponent} from './c-profile/c-profile.component';
import { HelppageComponent } from './helppage/helppage.component';


const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'discover',component:DiscoverComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'jobstatus',component:JobstatusComponent},
  {path:'c-profile',component:CProfileComponent},
  {path:'c-applist',component: CApplistComponent},
  {path:'c-addjob',component: CAddjobComponent},
  {path:'helppage',component:HelppageComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
