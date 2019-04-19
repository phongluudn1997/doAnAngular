import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BodyTemplateCatalogComponent } from './template/body-template-catalog/body-template-catalog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { MyOrderDetailComponent } from './components/my-order-detail/my-order-detail.component';


const routes: Routes = [
  { path:  '', pathMatch:  'full', redirectTo:  'list'},
  { path: 'list', component: CustomerListComponent},
  { path: 'details/:id', component: CustomerDetailsComponent},
  { path: 'create', component: CustomerCreateComponent},
  { path: 'update', component: CustomerUpdateComponent},  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product-list', component: BodyTemplateCatalogComponent },
  { path: 'product-detail', component: ProductDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', component: UserProfileComponent},
  { path: 'myOrder', component: MyOrderComponent },
  { path: 'myOrder/:id', component: MyOrderDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }