import {Product} from "./Product";
import {ProductOrder} from "./ProductOrder";

export class Order{
  id:string;
  productOrder:ProductOrder;
  quantity:number;
  totalMoney:number;

  constructor(id: string, productOrder: Product, quantity: number, totalMoney: number) {
    this.id = id;
    this.productOrder = productOrder;
    this.quantity = quantity;
    this.totalMoney = totalMoney;
  }
}
