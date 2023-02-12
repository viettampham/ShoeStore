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
import {CreateBillRequest} from "../Models/CreateBillRequest";
import {Bill} from "../Models/Bill";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = "https://provinces.open-api.vn/api/";

  constructor(private httpCLient: HttpClient) { }
  Login=(request:LoginRequest)=>this.httpCLient.post<LoginResponse>(`${environment.api_domain}/Authentication/Login`,request);
  Signin =(request:RegistrationRequest)=>this.httpCLient.post<boolean>(`${environment.api_domain}/Authentication/Registration`,request);
  GetProduct = () =>this.httpCLient.get<Product[]>(`${environment.api_domain}/Product/get-product`);
  GetBrand = () => this.httpCLient.get<string[]>(`${environment.api_domain}/Product/get-brand`);
  GetCategoryProduct = () => this.httpCLient.get<Category[]>(`${environment.api_domain}/Category/get-category`);
  CreateOrder = (request:CreateOrderRequest) => this.httpCLient.post<Order>(`${environment.api_domain}/OrderControlle/add-order`,request);
  GetOrder = () => this.httpCLient.get<Order[]>(`${environment.api_domain}/OrderDetail/get-list-order`);
  //get viet nam
  getCity  = () => this.httpCLient.get<any>(`${this.host}`+"?depth=1");
  getDistrict = (idCode: number) => this.httpCLient.get<any>(`${this.host}` + "p/" + `${idCode}`+ "?depth=2");
  getWard = (idCode: number) => this.httpCLient.get<any>(`${this.host}` + "d/" + `${idCode}` + "?depth=2");

  CreateBill = (request:CreateBillRequest) => this.httpCLient.post<any>(`${environment.api_domain}/Bill/create-bill`,request)
  DeleteOrderByID =(id:string)=>this.httpCLient.delete<any>(`${environment.api_domain}/OrderControlle/delete-order/${id}`)
  GetProductByBrand = (brand:string) =>this.httpCLient.get<any>(`${environment.api_domain}/Product/get-product-by-brand/${brand}`);
  SearchProduct = (request:string) => this.httpCLient.get(`${environment.api_domain}/Product/search-product/${request}`);
  GetOrderByUser = (id:string) => this.httpCLient.get<any>(`${environment.api_domain}/OrderControlle/get-order-by-user/${id}`)
  GetBillNoPayedUser = (id:string) => this.httpCLient.get<Bill>(`${environment.api_domain}/Bill/user-get-bill-no-payed/${id}`)
  GetBillPayedUser = (id:string) => this.httpCLient.get<Bill>(`${environment.api_domain}/Bill/user-get-bill-payed/${id}`)
  ConfirmBill =(id:string)=> this.httpCLient.post<any>(`${environment.api_domain}/Bill/confirm-bill/${id}`,id)
}
