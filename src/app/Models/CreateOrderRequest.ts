export class CreateOrderRequest{
  id:string;
  quantity:number;


  constructor(id: string, quantity: number) {
    this.id = id;
    this.quantity = quantity;
  }
}
