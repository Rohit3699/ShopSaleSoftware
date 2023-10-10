import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';

//const routes: Routes = [{ path: '', component: AccountComponent }];
const routes: Routes = [
  { path: '', component: AccountComponent, children:[
    { path:'', component:LoginComponent},
    { path:'Login', component:LoginComponent},
    //{ path: 'details', component: AdminRegistrationComponent }
  ]  
}    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
