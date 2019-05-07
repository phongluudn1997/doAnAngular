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

  data: any;
  constructor(private http: CategoryService,
    private spinner: NgxSpinnerService,
    private productService: ProductService) { }
  ngOnInit() {
    this.spinner.show();
    this.http.getCatList().subscribe(
      next => {
        if(next.success == true){
          this.data = next.categories;
          console.log(this.data)
        } else {
          console.log('No data')
        }
      },
      error => {
        console.log(error)
      }
    )
    
  }

}
