import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminAddUserComponent } from './components/admin-add-user/admin-add-user.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';
import { AdminAddNewProductComponent } from './components/admin-add-new-product/admin-add-new-product.component';
import { AdminManageProductComponent } from './components/admin-manage-product/admin-manage-product.component';
import { AdminManageOrdersComponent } from './components/admin-manage-orders/admin-manage-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductPriceDirective } from './directives/product-price.directive';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { MustMatchDirective } from './shared/must-match.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OffersComponent } from './components/offers/offers.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CategoryComponent } from './components/category/category.component';
import { AlertComponent } from './components/alert/alert.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/components/helpers/jwt.interceptor';
import {  ErrorInterceptor } from 'src/app/components/helpers/error.interceptor';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './components/helpers/auth.gaurd';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAddUserComponent,
    AdminEditUserComponent,
    ProfileComponent,
    CartComponent,
    CheckoutComponent,
    AdminAddNewProductComponent,
    AdminManageProductComponent,
    AdminManageOrdersComponent,
    ProductPriceDirective,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    MustMatchDirective,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    OffersComponent,
    DepartmentsComponent,
    PlaceorderComponent,
    HomepageComponent,
    CategoryComponent,
    AlertComponent,
    LogoutComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
