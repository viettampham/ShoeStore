import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../Models/LoginRequest";
import {LoginResponse} from "../Models/LoginResponse";
import {environment} from "../../environments/environment";
import {RegistrationRequest} from "../Models/RegistrationRequest";
import {Product} from "../Models/Product";
import {Category} from "../Models/Category";
import {Brand} from "../Models/Brand";
import {Order} from "../Models/Order";
import {CreateOrderRequest} from "../Models/CreateOrderRequest";
import {Cart} from "../Models/Cart";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = "https://provinces.open-api.vn/api/";

  constructor(private httpCLient: HttpClient) { }
  Login=(request:LoginRequest)=>this.httpCLient.post<LoginResponse>(`${environment.api_domain}/Authentication/Login`,request);
  Signin =(request:RegistrationRequest)=>this.httpCLient.post<boolean>(`${environment.api_domain}/Authentication/Registration`,request);
  GetProduct = () =>this.httpCLient.get<Product[]>(`${environment.api_domain}/Product/Get-list-product`);
  GetBrand = () => this.httpCLient.get<Brand[]>(`${environment.api_domain}/Product/get-list-brand`);
  GetCategoryProduct = () => this.httpCLient.get<Category[]>(`${environment.api_domain}/Category/Get-list`);
  GetProductById = (id:string)=> this.httpCLient.get<Product>(`${environment.api_domain}/Product/get-product-by-id/${id}`);
  CreateOrder = (request:CreateOrderRequest) => this.httpCLient.post<Order>(`${environment.api_domain}/OrderDetail/create-order`,request);
  GetOrder = () => this.httpCLient.get<Order[]>(`${environment.api_domain}/OrderDetail/get-list-order`);
  GetCart = () => this.httpCLient.get<Cart[]>(`${environment.api_domain}/Cart/get-list-cart`);
  DeleteOrder =(id:string)=> this.httpCLient.delete(`${environment.api_domain}/OrderDetail/delete-order/${id}`);


  getCity  = () => this.httpCLient.get<any>(`${this.host}`+"?depth=1");
  getDistrict = (idCode: number) => this.httpCLient.get<any>(`${this.host}` + "p/" + `${idCode}`+ "?depth=2");
  getWard = (idCode: number) => this.httpCLient.get<any>(`${this.host}` + "d/" + `${idCode}` + "?depth=2");

}
