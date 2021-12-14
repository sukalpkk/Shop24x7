import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductResponse, ProductDetails } from 'src/app/models/productdetails.model';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productsDetail: ProductDetails;
  public productDetails: ProductDetails[];
  public products!: ProductDetails;
  public productDataLength: number;
  constructor(private activateRoute: ActivatedRoute, private productService: ProductDetailsService, private router: Router) {
    this.productDetails = []
    this.productsDetail = {} as ProductDetails;
    this.productDataLength = 0;

  }

  public ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.initializeProductData();
    })

  }


  public initializeProductData(): void {
    this.productDetails = this.productService.getProductRecords()
  }



}

