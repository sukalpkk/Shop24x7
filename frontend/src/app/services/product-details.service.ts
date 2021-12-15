import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductResponse, ProductDetails } from '../models/productdetails.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  public getProductById(id: number): ProductDetails {
    return this.getProductRecords().find(ProductDetails => ProductDetails.id == id)!;
  }


  public getProductRecords(): ProductDetails[] {
    return [{
      "id": 1,
      "name": "Nokia 105",
      "category": "smartphone",
      "price": 300,
      "discountPrice": 50,
      "description": "compact mobile for travel purposes",
      "image": "https://images-na.ssl-images-amazon.com/images/I/31Z2ee9oYQL.jpg",
      "created_on": "15 AUG, 2021",
      "isTopProduct": "true"
    },


    {
      "id": 2,
      "name": "Samsung galaxy m51",
      "category": "smartphone",
      "price": 400,
      "discountPrice": 20,
      "description": "M51 is ready for any task at hand with an octa-core processor",
      "image": "https://images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-8gb-sm-m515fzbeins-sm-m---fzbdins-301211753?scl=1&fmt=png-alpha",
      "created_on": "16 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 3,
      "name": "Oppo f19",
      "category": "smartphone",
      "price": 500,
      "discountPrice": 10,
      "description": "6.43 Inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels",
      "image": "https://images-na.ssl-images-amazon.com/images/I/712PBW8cGBL._SX679_.jpg",
      "created_on": "14 AUG, 2021",
      "isTopProduct": "false"
    },

    {
      "id": 4,
      "name": "One plus nord",
      "category":"smartphone",
      "price": 350,
      "discountPrice": 80,
      "description": "64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61HjItaMQdS._SL1500_.jpg",
      "created_on": "19 AUG, 2021",
      "isTopProduct": "false"
    },

    {
      "id": 5,
      "name": "Huawei p40 pro",
      "category": "smartphone",
      "price": 460,
      "discountPrice": 50,
      "description": "Ultra Vision Leica Quad Camera: 50 MP Ultra Vision Sensor, 40 MP Ultra Wide Cine Camera",
      "image": "https://images-eu.ssl-images-amazon.com/images/I/41wcndTcMKL._SX300_SY300_QL70_FMwebp_.jpg",
      "created_on": "17 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 6,
      "name": "Mi 10i 5G",
      "category": "smartphone",
      "price": 3000,
      "discountPrice": 50,
      "description": "Midnight Black, 8GB RAM, 128GB Storage",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71%2BKJpeI2rL._SL1500_.jpg",
      "created_on": "10 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 7,
      "name": "Nokia 105",
      "category": "smartphone",
      "price": 700,
      "discountPrice": 60,
      "description": "compact mobile for travel purposes",
      "image": "https://images-na.ssl-images-amazon.com/images/I/31Z2ee9oYQL.jpg",
      "created_on": "11 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 8,
      "name": "Nokia 135",
      "category": "smartphone",
      "price": 1000,
      "discountPrice": 50,
      "description": "compact mobile for travel purposes",
      "image": "https://images-na.ssl-images-amazon.com/images/I/31Z2ee9oYQL.jpg",
      "created_on": "12 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 9,
      "name": "Nokia 95",
      "category": "smartphone",
      "price": 2200,
      "discountPrice": 20,
      "description": "compact mobile for travel purposes",
      "image": "https://images-na.ssl-images-amazon.com/images/I/31Z2ee9oYQL.jpg",
      "created_on": "13 AUG, 2021",
      "isTopProduct": "true"
    },
    ]
  }
}



