import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  idProduct: string;
  product: any;
  addToCartForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.idProduct = this.route.snapshot.params['id'];
    this.productService.getProductDetail(this.idProduct)
      .subscribe(   
        (next) => {
          this.spinner.hide();
          this.product = next;
          console.log(this.product)
        },
        (err) => {
          this.spinner.hide();
          console.log(err);
        }
      )

    this.addToCartForm = this.formBuilder.group({
      _id: this.route.snapshot.params['id'],
      product_quantity: [1]
    })

  }

  AddToCart() {
   // this.router.routeReuseStrategy.shouldReuseRoute = () => {return false;}
    console.log(this.addToCartForm.controls._id.value)
    console.log(this.addToCartForm.controls.product_quantity.value)
    this.cartService.addProduct({
      id_product: this.route.snapshot.params['id'],
      quantity: this.addToCartForm.controls.product_quantity.value
    }).subscribe(result => {
      this.toast.success('Add to Cart successfully', 'Success')
      window.location.reload()
    }, err => {
      console.log(err)
      this.toast.error('Please try again', 'Failed')
    })
   
  }

}
