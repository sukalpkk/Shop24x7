import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminAddUserComponent } from './components/admin-add-user/admin-add-user.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';

import { AdminAddNewProductComponent } from './components/admin-add-new-product/admin-add-new-product.component';
import { AdminManageProductComponent } from './components/admin-manage-product/admin-manage-product.component';
import { AdminManageOrdersComponent } from './components/admin-manage-orders/admin-manage-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductPriceDirective } from './directives/product-price.directive';




@NgModule({
  declarations: [
    AppComponent,
    AdminAddUserComponent,
    AdminEditUserComponent,
    UserProfileComponent,
    CartComponent,
    CheckoutComponent,
    AdminAddNewProductComponent,
    AdminManageProductComponent,
    AdminManageOrdersComponent,
    ProductPriceDirective,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
