import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private toast: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }
  cart: any;
  ngOnInit() {
    this.spinner.show();
    this.cartService.getCartOfUser().subscribe(cart => {
        this.spinner.hide();
        this.cart = cart['cart']
        console.log(this.cart)
    }, err => {
      console.log(err)
    })
  }

  TruSoLuong(_idProduct, quantity) {
    if (quantity > 1) {
      quantity--;
      console.log(quantity)
      this.cartService.updateProduct(_idProduct, quantity).subscribe(next => {
        console.log(next)
      }, err => {
        console.log(err)
      })
      window.location.reload();
    }
  }
  CongSoLuong(_idProduct, quantity) {
    quantity++;
    console.log(quantity)
    this.cartService.updateProduct(_idProduct, quantity).subscribe(next => {
      console.log(next)
    }, err => {
      console.log(err)
    })
    window.location.reload();
  }

  deleteProduct(_idProduct) {
    this.cartService.deleteProduct(_idProduct).subscribe(next => {
      if (next['success'] == true) {
        this.toast.success(next['message'], 'Success')
        window.location.reload();
      } else {
        this.toast.error(next['message'], 'Error')
      }
    }, err => {
      console.log(err)
      this.toast.error('Something Wrong', 'Error')
    })
  }

}
