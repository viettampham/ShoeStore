export class CreateCartRequest{
  userID:string;
  OrderDetials: string[];

  constructor(userID: string, OrderDetials: string[]) {
    this.userID = userID;
    this.OrderDetials = OrderDetials;
  }
}
