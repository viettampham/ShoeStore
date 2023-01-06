import {Order} from "./Order";

export class Cart{
  cartId:string;
  orderDetails:Order[];
  quantity:number;
  totalmoney:number;


  constructor(cartId: string, orderDetails: Order[], quantity: number, totalmoney: number) {
    this.cartId = cartId;
    this.orderDetails = orderDetails;
    this.quantity = quantity;
    this.totalmoney = totalmoney;
  }
}
