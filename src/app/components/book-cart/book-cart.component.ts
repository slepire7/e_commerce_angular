import { Component, OnInit } from '@angular/core';
import { FilterModel } from './filters/model/filter';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent implements OnInit {

  public dataFilter: FilterModel = {}
  constructor() { }
  ngOnInit(): void {
  }
  Callback(event: FilterModel) {
    this.dataFilter = event;

  }
}
