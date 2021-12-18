import { ICart } from './cart.model';
import { ProductDetails } from './productdetails.model';

export interface IOrders{
    _id:String;
    user:String;
    orderPlacedOn:String;
    isDelivered:String;
    orderDeliveredOn:String;
    cart:ProductDetails[];
}

