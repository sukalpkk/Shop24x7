import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminAddUserComponent } from './components/admin-add-user/admin-add-user.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';

import { AdminAddNewProductComponent } from './components/admin-add-new-product/admin-add-new-product.component';
import { AdminManageProductComponent } from './components/admin-manage-product/admin-manage-product.component';
import { AdminManageOrderComponent } from './components/admin-manage-order/admin-manage-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPriceDirective } from './directives/product-price.directive';
import { MustMatchDirective } from './directives/must-match.directive';



@NgModule({
  declarations: [
    AppComponent,
    AdminAddUserComponent,
    AdminEditUserComponent,
    AdminAddNewProductComponent,
    AdminManageProductComponent,
    AdminManageOrderComponent,
    ProductPriceDirective,
    UserProfileComponent,
    MustMatchDirective

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
