import {ProductOrder} from "./ProductOrder";

export class Order{
  id:string;
  product:ProductOrder;
  quantity:number;
  totalMoney:number;
  displayTotalMoney:string


  constructor(id: string, product: ProductOrder, quantity: number, totalMoney: number, displayTotalMoney: string) {
    this.id = id;
    this.product = product;
    this.quantity = quantity;
    this.totalMoney = totalMoney;
    this.displayTotalMoney = displayTotalMoney;
  }
}
