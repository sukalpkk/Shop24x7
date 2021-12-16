import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminManageOrdersComponent } from './components/admin-manage-orders/admin-manage-orders.component';
import { AdminAddNewProductComponent } from './components/admin-add-new-product/admin-add-new-product.component';
import { AdminAddUserComponent } from './components/admin-add-user/admin-add-user.component';
import { AdminManageProductComponent } from './components/admin-manage-product/admin-manage-product.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OffersComponent } from './components/offers/offers.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomepageComponent},
  {path:"categories",component:CategoryComponent},
  {path:"profile", component: ProfileComponent},
  {path:"product-details",component:ProductDetailsComponent},
  {path:"search/:searchTerm",component:ProductDetailsComponent},
  {path:"departments",component:DepartmentsComponent},
  {path:"offers",component:OffersComponent},
  {path:"cart", component: CartComponent},
  {path:"checkout", component: CheckoutComponent},
  {path:"order", component: PlaceorderComponent},
  {path:"admin/orders", component: AdminManageOrdersComponent},
  {path:'admin/addUser', component: AdminAddUserComponent},
  {path:'admin/editUser',component: AdminEditUserComponent},
  {path:'admin/add-new-product', component:AdminAddNewProductComponent},
  {path:'admin/products',component:AdminManageProductComponent},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
