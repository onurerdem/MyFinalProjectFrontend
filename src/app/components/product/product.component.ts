import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product1 = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5, unitInStock: 5 };
  // product2 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 };
  // product3 = { productId: 3, productName: 'Mouse', categoryId: 1, unitPrice: 5 };
  // product4 = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5 };
  // product5 = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5 };

  products:Product[] = [
    // this.product1,
    // this.product2,
    // this.product3, 
    // this.product4, 
    // this.product5
  ];
  apiUrl = "https://localhost:44374/api/products/getall"
  //productResponseModel:ProductResponseModel=(data : this.products, message:"", success:true);
  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {
    //console.log("Init çalıştı.");
    this.getProducts();
  }

  getProducts(){
      this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {this.products = response.data});
  }

}

