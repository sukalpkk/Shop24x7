import { Component, OnInit } from '@angular/core';
import { IProductResponse, ProductDetails } from 'src/app/models/productdetails.model';
import { ProductDetailsService } from 'src/app/services/product-details.service';

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
  constructor(private productService: ProductDetailsService) {
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


}
