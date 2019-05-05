import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatStepperModule } from '@angular/material/stepper';
import { NumberPickerModule } from 'ng-number-picker';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NavComponent } from './components/nav/nav.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RegisterComponent } from './components/register/register.component';
import { CatalogCarouselComponent } from './components/catalog-carousel/catalog-carousel.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { MyOrderDetailComponent } from './components/my-order-detail/my-order-detail.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerCreateComponent,
    CategoryListComponent,
    CustomerUpdateComponent,
    MessagesComponent,
    LoginComponent,
    NavComponent,
    CarouselComponent,
    RegisterComponent,
    CatalogCarouselComponent,
    ProductDetailsComponent,
    FooterComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    UserProfileComponent,
    MyOrderComponent,
    MyOrderDetailComponent,
    ProductListComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    MatStepperModule,
    NumberPickerModule
    //BootstrapInputSpinner,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
