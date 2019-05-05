import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  addressForm: FormGroup;
  user: any;
  cart: any;
  order: any;
  constructor(
    private cartService: CartService,
    private userService: UserService,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private orderService: OrderServiceService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      fullName: [''],
      phoneNumber: [''],
      address: ['']
    })
    this.userService.getUserInfo(localStorage.getItem('userId')).subscribe(next => {
      this.user = next.user;
      this.addressForm.controls.fullName.setValue(this.user.fullName);
      this.addressForm.controls.phoneNumber.setValue(this.user.phoneNumber);
      this.addressForm.controls.address.setValue(this.user.address);
    })
    this.cartService.getCartOfUser().subscribe(cart => {
      this.cart = cart['cart'];
      console.log(this.cart)
    }, err => {
      console.log(err)
    })

  }

  Order(){
    let order = {};
    this.cartService.getCartOfUser().subscribe(next=>{
      let items = [];
      next['cart']['items'].map(item => {
        items.push({
          product: item._id,
          price: item.price_no_format,
          quantity: item.quantity
        })
      })
      let order = {
        user:{
          fullName: this.addressForm.controls.fullName.value,
          address: this.addressForm.controls.address.value,
          phoneNumber: this.addressForm.controls.phoneNumber.value
        },
        items:items
      }
      this.orderService.order(order).subscribe(next=>{
        console.log(next);
        this.router.navigateByUrl(`/myOrder/${next['order']['_id']}`)
        this.toast.success('Order successfully', "Success")
        this.cartService.clearCart().subscribe(err => {
          console.log(err)
          this.toast.error(`${err}`, 'Error')
        })
      }, err => {
        console.log(err);
        this.toast.error(`${err}`, 'Error')
      });
    }, err => {
      console.log(err);
      this.toast.error(`${err}`, 'Error')
    })
    
  }

}
