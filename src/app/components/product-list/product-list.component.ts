import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  p: number = 1;
  catList: [];
  products: Product[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.productService.getAllProductsByCategory(this.route.snapshot.params['id']).subscribe(next => {
      this.products = next;
      console.log(this.products)
      this.spinner.hide();
    }, err => {
      console.log(err);
      this.spinner.hide();
    })
    this.categoryService.getCatList().subscribe(list => {
      this.catList = list;
      console.log(this.catList)
    })
  }

}
