export class ProductOrder{
  title:string;
  description:string;
  image_url:string;
  price:number;
  size:string;
  brand:string;

  constructor(title: string, description: string, image_url: string, price: number, size: string, brand: string) {
    this.title = title;
    this.description = description;
    this.image_url = image_url;
    this.price = price;
    this.size = size;
    this.brand = brand;
  }
}
