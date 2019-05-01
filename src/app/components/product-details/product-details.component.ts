import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  idProduct: string;
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.idProduct = this.route.snapshot.params['id'];
    console.log(this.idProduct)
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
  }

}
