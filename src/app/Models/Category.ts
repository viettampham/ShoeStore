import {Product} from "./Product";

export class Category{
  categoryID:string;
  name:string;
  products:Product[]


  constructor(categoryID: string, name: string, products: Product[]) {
    this.categoryID = categoryID;
    this.name = name;
    this.products = products;
  }
}
