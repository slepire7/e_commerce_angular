import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FilterModel } from '../filters/model/filter';
import { Book } from './model/books.model';
import { BooksService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() filters: FilterModel = {
    maximo: 0,
    minimo: 0
  };
  livros: Book[] = [];
  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data => {
      this.livros = data;
    }))
    console.log("Filter",this.filters)
    if (this.filters.maximo != null && this.filters.minimo != null) {
      this.livros.filter((item) => {
        return item.price <= Number(this.filters.maximo) && item.price >= Number(this.filters.minimo);
      })
    }
  }


}


