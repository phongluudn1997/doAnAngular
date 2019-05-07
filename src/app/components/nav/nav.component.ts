import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private cartService: CartService,
    private toast: ToastrService) { }

  name: string;
  cartQuantity: Number;

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.authService.getUserInfo((localStorage.getItem('userId'))).subscribe(next => {
        this.name = (next['user']['fullName']);
        this.name = (this.name.split(' ').length > 2 ? this.name.split(' ', 2).join(' ') + ' ...' : this.name)
      }, err => {
        console.log(err)
      })
      this.cartService.getCartOfUser().subscribe(cart => {
        console.log(cart)
        this.cartQuantity = cart['cart']['total_quantity'];
        console.log(this.cartQuantity)
      }, err => {
        console.log(err)
        this.toast.error("Something wrong", "Failed")
      })
    }

  }

}
