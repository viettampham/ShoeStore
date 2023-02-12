export class Product{
  productID:string;
  name:string;
  description:string;
  imageURL:string;
  quantityAvailable:number
  price:number;
  size:string;
  brand:string;
  categorys:string[];
  displayPrice:string;


  constructor(displayPrice:string ,productID: string, name: string, description: string, imageURL: string, quantityAvailable: number, price: number, size: string, brand: string, categorys: string[]) {
    this.productID = productID;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.quantityAvailable = quantityAvailable;
    this.price = price;
    this.size = size;
    this.brand = brand;
    this.categorys = categorys;
    this.displayPrice = displayPrice
  }
}
