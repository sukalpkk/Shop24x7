
//import { CartService } from '../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductResponse, Product} from 'src/app/models/productdetails.model';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: any;
  product: Product = new Product();

  // GET 6 products from the database
  public productList: Product[];

// private _cartService:CartService
  constructor(private _httpClient:HttpClient, private _router:Router, private _route:ActivatedRoute,private productService: ProductDetailsService) { 
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this._router.onSameUrlNavigation = 'reload';
    this.productList=[];
    console.log("this is called")
  }

  public initializeProductData(): void {
    this.productList = this.productService.getProductRecords1()
  }



  public ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log("this is called ngoninit")

    this._route.params.subscribe(params => {
      this.initializeProductData();
      // this.product=params;
    },
    error => {
      console.log(error);
    })
    // this._httpClient.get<Product>('http://localhost:8080/products/'+this.id).subscribe(result => {
    //   this.product=result;}
     

    // this._httpClient.get<Product[]>('http://localhost:8080/products/').subscribe(result => {
    //   this.productList = result;
    this._route.params.subscribe(params => {
      this.initializeProductData();
      this.productList.sort(value => { return value.department == this.product.department ? -1 : 1 });
      for(let product of this.productList){
        if(product.productName == this.product.productName){
          this.productList = this.productList.filter(value => value != product);
        }
      }
    }, error => {
      console.log(error);
    })
  }

  addToCart(product : Product){
    //this._cartService.addToCart(product);
    console.log(product)
    alert('Product added to cart!');
  }

  buyNow(product : Product){
    //this._cartService.clearCart();
    // this._cartService.addToCart(product);
    this._router.navigate(['/checkout']);
  }
  refresh()
  {
    this._router.onSameUrlNavigation = 'reload';
  }
}
