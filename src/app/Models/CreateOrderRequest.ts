export class CreateOrderRequest{
  userID:string;
  productID:string;
  quantityOrder:number;

  constructor(userID: string, productID: string, quantityOrder: number) {
    this.userID = userID;
    this.productID = productID;
    this.quantityOrder = quantityOrder;
  }
}
