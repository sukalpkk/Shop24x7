import { Component, OnInit } from '@angular/core';
import { IProductResponse, ProductDetails } from 'src/app/models/productdetails.model';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { Icategory, Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public productsDetail: ProductDetails;
  public bannerDetail: any;
  public categories: Category[];
  public productDetails: ProductDetails[];
  public products!: ProductDetails;
  public productDataLength: number;
  constructor(private productService: ProductDetailsService) {
    this.productDetails = []
    this.bannerDetail = {};
    this.categories = []
    this.productsDetail = {} as ProductDetails;
    this.productDataLength = 0;

  }

  public ngOnInit(): void {    
    this.initializeBannerData();
    this.initializeCatgoryData();
      this.initializeProductData();   
  }


  public initializeBannerData(): void {    
    this.productService.getHomepageBanner().subscribe((response:any)=>{
      this.bannerDetail=response.products[0];
    })
  }

  public initializeCatgoryData(): void {    
    this.productService.getHomepageCategory().subscribe((response:any)=>{
      this.categories=response.categories;
    })
  }

  public initializeProductData(): void {    
    this.productService.getHomepageProducts().subscribe((response:any)=>{
      this.productDetails=response.products;
    })
  }


}
