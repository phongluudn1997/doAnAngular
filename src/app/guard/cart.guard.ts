import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {
  constructor(private cartQuantity: AuthenticationService, private router: Router) { }
  canActivate() {
    this.cartQuantity.getUserInfo().subscribe(next => {
      if (next['product_cart'] > 0) return true;
      else {
        this.router.navigateByUrl('/cart')
        return false;
      }
    }, err => {
      console.log(err);
    })
    this.router.navigateByUrl('/cart')
    return false;
  }

}
