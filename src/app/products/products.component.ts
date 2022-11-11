import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string = "Welcome to products list"
  productList:Product[]=[];
  constructor() { }

  ngOnInit(): void {
    this.productList = [
      {id:'1',title:'T-shirt 1',quantity:10,price:100,like:0,picture:''},
      {id:'2',title:'T-shirt 2',quantity:0,price:20,like:0,picture:''},
      {id:'3',title:'T-shirt 3',quantity:10,price:50,like:0,picture:''}
    ];
  }

}
