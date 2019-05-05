import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  data: any;
  constructor(private http: CategoryService) { }
  ngOnInit() {
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
