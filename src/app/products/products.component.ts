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
      {id:'1',title:'T-shirt 1',quantity:10,price:100,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'},
      {id:'2',title:'T-shirt 2',quantity:0,price:20,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'},
      {id:'3',title:'T-shirt 3',quantity:10,price:50,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'}
    ];
  }

  BuyProduct(idProduct:string){
    for(let i=0;i<this.productList.length;i++){
      if(this.productList[i].id.match(idProduct)){
        this.productList[i].quantity--
      }
    }
  }

  LikeProduct(idProduct:string){
    for(let i=0;i<this.productList.length;i++){
      if(this.productList[i].id.match(idProduct)){
        this.productList[i].like++
      }
    }
  }

}
