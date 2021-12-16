import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductResponse, ProductDetails } from 'src/app/models/productdetails.model';
import { ProductDetailsService } from 'src/app/services/product-details.service';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  public productsDetail: ProductDetails;
  public productDetails: ProductDetails[];
  public products!: ProductDetails;
  public productDataLength: number;
  constructor(private activateRoute: ActivatedRoute, private departmentsService: DepartmentsService, private router: Router) {
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
    this.productDetails = this.departmentsService.getProductRecords()
  }



}


