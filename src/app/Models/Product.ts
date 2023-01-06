export class Product{
  id:string;
  title:string;
  description:string;
  image_url:string;
  size:string;
  price:number;
  displayPrice:string;
  quantityaVailable:number;
  brand:string;
  category:string[];


  constructor(id: string, title: string, description: string, image_url: string, size: string, price: number, displayPrice: string, quantityaVailable: number, brand: string, category: string[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image_url = image_url;
    this.size = size;
    this.price = price;
    this.displayPrice = displayPrice;
    this.quantityaVailable = quantityaVailable;
    this.brand = brand;
    this.category = category;
  }
}
