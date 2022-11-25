import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product=new Product();
  email!:string;
  constructor() { }

  ngOnInit(): void {
  }

  ajouter(){
    console.log("function add works")
  }

}
