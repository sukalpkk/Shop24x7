import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminAddNewProductComponent } from './components/admin-add-new-product/admin-add-new-product.component';
import { AdminAddUserComponent } from './components/admin-add-user/admin-add-user.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:'full'},
  {path:'admin/addUser', component: AdminAddUserComponent},
  {path:'admin/add-new-product', component:AdminAddNewProductComponent},

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:ErrorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
