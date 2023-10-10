import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
{ path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }, 
{ path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'Account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }, 
{ path: 'POSDashboard', loadChildren: () => import('./posdashboard/posdashboard.module').then(m => m.POSDashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
