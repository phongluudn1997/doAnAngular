import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-template-catalog',
  templateUrl: './body-template-catalog.component.html',
  styleUrls: ['./body-template-catalog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyTemplateCatalogComponent implements OnInit {

  p: number = 1;
  collection = [];
  constructor() {
    for(let i = 1; i <= 100; i++){
      this.collection.push('Item ' + i);
    }
  }

  ngOnInit() {
  }



}
