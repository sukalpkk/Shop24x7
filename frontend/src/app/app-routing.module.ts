import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddNewProductComponent } from './components/admin-add-new-product/admin-add-new-product.component';
import { AdminAddUserComponent } from './components/admin-add-user/admin-add-user.component';
import { AdminManageProductComponent } from './components/admin-manage-product/admin-manage-product.component';

const routes: Routes = [
  {path:'admin/addUser', component: AdminAddUserComponent},
  {path:'admin/add-new-product', component:AdminAddNewProductComponent},
  {path:'admin/products',component:AdminManageProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
