import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../Models/LoginRequest";
import {LoginResponse} from "../Models/LoginResponse";
import {environment} from "../../environments/environment";
import {RegistrationRequest} from "../Models/RegistrationRequest";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCLient: HttpClient) { }
  Login=(request:LoginRequest)=>this.httpCLient.post<LoginResponse>(`${environment.api_domain}/Authentication/Login`,request);
  Signin =(request:RegistrationRequest)=>this.httpCLient.post<boolean>(`${environment.api_domain}/Authentication/Registration`,request)

}
