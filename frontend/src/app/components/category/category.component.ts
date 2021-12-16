import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductResponse, ProductDetails } from 'src/app/models/productdetails.model';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public productsDetail: ProductDetails;
  public productDetails: ProductDetails[];
  public products!: ProductDetails;
  public productDataLength: number;
  public priceRangeList: string[];

  constructor(private activateRoute: ActivatedRoute, private productService: ProductDetailsService, private router: Router) {
    this.productDetails = [];
    this.productsDetail = {} as ProductDetails;
    this.productDataLength = 0;
    this.priceRangeList = [];

  }

  public ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.initializeProductData();
      this.GetPriceRangeList();
    })
  }

  public initializeProductData(): void {
    this.productDetails = this.productService.getProductRecords();
  }

  public GetPriceRangeList(): void {
    this.priceRangeList = this.productService.getPriceRanges()
  }

}
