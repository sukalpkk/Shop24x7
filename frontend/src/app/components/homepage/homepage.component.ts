import { Component, OnInit } from '@angular/core';
import { IProductResponse, ProductDetails } from 'src/app/models/productdetails.model';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { CartService } from 'src/app/services/cart.service';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public productsDetail: ProductDetails;
  public productDetails: ProductDetails[];
  public products!: ProductDetails;
  public productDataLength: number;
  constructor(private productService: ProductDetailsService, private cartService: CartService, private alertService:AlertService) {
    this.productDetails = []
    this.productsDetail = {} as ProductDetails;
    this.productDataLength = 0;

  }

  public ngOnInit(): void {    
      this.initializeProductData();   
  }


  public initializeProductData(): void {
    this.productDetails = this.productService.TopSellingProducts()
  }

  public addToCart(productdetails:ProductDetails){
    // this.isadminAddNewProductFormSubmitted = true;

    // if (this.adminAddNewProductForm.invalid) {
    //   return;
    // }

  

    this.cartService.addToCart(productdetails);
    console.log(productdetails)
    alert('Product added!');
  }

}
