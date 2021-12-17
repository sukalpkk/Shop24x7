export interface IProductResponse{
    details:ProductDetails[];
}
export interface ProductDetails{
    id:number,
    name:String,
    category:String,
    price:number,
    discountPrice:number,
    description:String,
    image:String,
    created_on:String,
    isTopProduct:String
}
export class ProductDetails implements ProductDetails{
    id!:number;
    name!:String;
    category!:String;
    price!:number;
    discountPrice!:number;
    description!:String;
    image!:String;
    created_on!:String;
    isTopProduct!:String;
}
export class Product{
    id!:number;
    productName!:String;
    category!:String;
    department!:String;
    price!:number;
    discountPrice!:number;
    description!:String;
    image!:String;
    created_on!:String;
    topSelling!:Boolean;
    isTopProduct!:String;
}

