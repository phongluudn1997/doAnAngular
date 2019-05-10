import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  topProducts: any;
  newProducts: any;
  data: any;
  constructor(private http: CategoryService,
    private productService: ProductService,
    private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.spinner.show();
    this.http.getCatList().subscribe(
      next => {
        this.spinner.hide();      
          this.data = next;
          console.log(this.data)
      },
      error => {
        console.log(error)
      }
    )
    this.productService.getTopProducts().subscribe(next=>{
      this.topProducts = next;
      console.log(this.topProducts);
    }, err =>{
      console.log(err)
    })
    this.productService.getNewProducts().subscribe(next=>{
      this.newProducts = next;
      console.log(this.newProducts)
    }, err => {
      console.log(err)
    })
  }

}
