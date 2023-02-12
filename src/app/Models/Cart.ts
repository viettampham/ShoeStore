import {Order} from "./Order";

export class Cart{
  cartID:string;
  userID:string;
  totalMoneyCart:number;
  orders: Order[];


  constructor(cartID: string, userID: string, orders: Order[], totalMoneyCart: number) {
    this.cartID = cartID;
    this.userID = userID;
    this.orders = orders;
    this.totalMoneyCart = totalMoneyCart;
  }
}
