import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { VendorComponent } from './vendor/vendor.component';
// const routes: Routes = [
//   { path: '',component: AdminComponent },
//   {path:'category',component:CategoryComponent}
// ];
const routes: Routes = [
  { path: '', component: AdminComponent, children:[
  //  { path:'', component:CategoryComponent},
   { path:'category', component:CategoryComponent},
  { path: 'product', component: ProductComponent },
  { path: 'vendor', component: VendorComponent }
  ]  
}    
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
