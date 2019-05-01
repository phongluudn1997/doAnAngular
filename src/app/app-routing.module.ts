import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { MyOrderDetailComponent } from './components/my-order-detail/my-order-detail.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'category-list' },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'details/:id', component: CustomerDetailsComponent },
  { path: 'create', component: CustomerCreateComponent },
  { path: 'update', component: CustomerUpdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product-detail/:id', component: ProductDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'myOrder', component: MyOrderComponent },
  { path: 'myOrder/:id', component: MyOrderDetailComponent },
  { path: 'products/category/:id', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }