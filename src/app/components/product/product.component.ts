import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
//import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

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
  dataLoaded = false;

  //productResponseModel:ProductResponseModel=(data : this.products, message:"", success:true);
  constructor(private productService:ProductService, 
    private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    //console.log("Init çalıştı.");
    //this.getProducts();
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }

  getProducts() {
      //this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {this.products = response.data});
      //console.log("Api request başladı.")
      this.productService.getProducts().subscribe(response=>{
        this.products = response.data
        this.dataLoaded = true;
        //console.log("Api request bitti.");
      })
      //console.log("Metod bitti.");
  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })    
  }

}

