export class ProductOrder{
  title:string;
  description:string;
  image_url:string;
  price:number;
  displayPrice:string;
  size:string;
  brand:string;


  constructor(title: string, description: string, image_url: string, price: number, displayPrice: string, size: string, brand: string) {
    this.title = title;
    this.description = description;
    this.image_url = image_url;
    this.price = price;
    this.displayPrice = displayPrice;
    this.size = size;
    this.brand = brand;
  }
}
