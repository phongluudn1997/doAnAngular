import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private toast: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.addressForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    })
    this.userService.getUserInfo().subscribe(next => {
      this.user = next;
      this.addressForm.controls.fullname.setValue(this.user.profile.fullname);
      this.addressForm.controls.phone.setValue(this.user.profile.phone);
      this.addressForm.controls.address.setValue(this.user.profile.address);
    })
    this.cartService.getCartOfUser().subscribe(cart => {
      this.spinner.hide();
      this.cart = cart;
      console.log(this.cart)
    }, err => {
      this.spinner.hide();
      console.log(err)
    })
  }

  get f(){
    return this.addressForm.controls;
  }

  moveToStep2(){
    console.log(this.f.fullname.value)
    if(this.f.fullname.value !== '' && this.f.phone.value !== '' && this.f.address.value !== ''){} else {
      this.toast.error('Điền thông tin người nhận', "Error");
    }
  }

  Order() {

    let order = {
      id_payment: 2,
      fullaname: this.addressForm.controls.fullname.value,
      address: this.addressForm.controls.address.value,
      phone: this.addressForm.controls.phone.value
    }
    console.log(order)
    this.orderService.order(order).subscribe(next => {
      console.log(next);
      this.router.navigateByUrl(`/myOrder/${next['id']}`)
      this.toast.success('Order successfully', "Success")
    }, err => {
      console.log(err);
      this.toast.error('Something happened when order', 'Error')
    });

  }

}
