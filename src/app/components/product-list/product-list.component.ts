import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  catList: [];
  products: Product[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productService.getAllProductsByCategory(this.route.snapshot.params['id']).subscribe(next=>{
      this.products = next['products'];
      console.log(this.products)
    })
    this.categoryService.getCatList().subscribe(list => {
      this.catList = list.categories;
      console.log(this.catList)
    })
  }

}
