import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  idProduct: string;
  product: Product;
  addToCartForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.idProduct = this.route.snapshot.params['id'];
    this.productService.getProductDetail(this.idProduct)
      .subscribe(
        (next) => {
          this.product = next;
          console.log(this.product)
        },
        (err) => {
          console.log(err);
        }
      )

    this.addToCartForm = this.formBuilder.group({
      _id: this.route.snapshot.params['id'],
      product_quantity: [1]
    })

  }

  AddToCart() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {return false;}
    console.log(this.addToCartForm.controls._id.value)
    console.log(this.addToCartForm.controls.product_quantity.value)
    this.cartService.addProduct({
      _idProduct: this.route.snapshot.params['id'],
      quantity: this.addToCartForm.controls.product_quantity.value
    }).subscribe(result => {
      this.toast.success('Add to Cart successfully', 'Success')
      window.location.reload()
    }, err => {
      this.toast.error('Please try again', 'Failed')
    })
   
  }

}
