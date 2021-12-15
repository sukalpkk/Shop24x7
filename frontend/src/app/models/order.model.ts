import { ICart } from './cart.model';

export interface IOrders{
    _id:String;
    user:String;
    orderPlacedOn:String;
    isDelivered:String;
    orderDeliveredOn:String;
    cart:ICart[];
}

