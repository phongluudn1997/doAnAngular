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
        this.data = next;
        console.log(this.data)
      },
      error => {
        console.log(error)
      }
    )
  }

}
