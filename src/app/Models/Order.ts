import {ProductOrder} from "./ProductOrder";
import {Category} from "./Category";

export class Order{
  orderID:string;
  userID:string;
  productID:ProductOrder;
  name:string;
  description:string;
  imageURL:string;
  quantityAvailable:number;
  price:number;
  displayPrice:string;
  size:string;
  brand:string;
  categories:Category[];
  quantityOrder:number;
  totalMoney:number;
  displayTotalMoneyOrder:string;
  isinCart:boolean;


  constructor(displayTotalMoneyOrder:string,displayPrice:string, orderID: string, userID: string, productID: ProductOrder, name: string, description: string, imageURL: string, quantityAvailable: number, price: number, size: string, brand: string, categories: Category[], quantityOrder: number, totalMoney: number, isinCart: boolean) {
    this.orderID = orderID;
    this.userID = userID;
    this.displayPrice = displayPrice
    this.productID = productID;
    this.displayTotalMoneyOrder = displayTotalMoneyOrder
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.quantityAvailable = quantityAvailable;
    this.price = price;
    this.size = size;
    this.brand = brand;
    this.categories = categories;
    this.quantityOrder = quantityOrder;
    this.totalMoney = totalMoney;
    this.isinCart = isinCart;
  }
}
