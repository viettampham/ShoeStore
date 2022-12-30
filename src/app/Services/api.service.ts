import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../Models/LoginRequest";
import {LoginResponse} from "../Models/LoginResponse";
import {environment} from "../../environments/environment";
import {RegistrationRequest} from "../Models/RegistrationRequest";
import {Product} from "../Models/Product";
import {Category} from "../Models/Category";
import {Brand} from "../Models/Brand";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCLient: HttpClient) { }
  Login=(request:LoginRequest)=>this.httpCLient.post<LoginResponse>(`${environment.api_domain}/Authentication/Login`,request);
  Signin =(request:RegistrationRequest)=>this.httpCLient.post<boolean>(`${environment.api_domain}/Authentication/Registration`,request);
  GetProduct = () =>this.httpCLient.get<Product[]>(`${environment.api_domain}/Product/Get-list-product`);
  GetBrand = () => this.httpCLient.get<Brand[]>(`${environment.api_domain}/Product/get-list-brand`);
  GetCategoryProduct = () => this.httpCLient.get<Category[]>(`${environment.api_domain}/Category/Get-list`);
  GetProductById = (id:string)=> this.httpCLient.get<Product>(`${environment.api_domain}/Product/get-product-by-id/${id}`);



}
