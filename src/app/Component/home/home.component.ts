import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../Services/api.service";
import {Router} from "@angular/router";
import {Order} from "../../Models/Order";
import {Product} from "../../Models/Product";
import {style} from "@angular/animations";
import {tokenGetter} from "../../app.module";
import {JwtHelperService} from "@auth0/angular-jwt";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiService,
              private route:Router,
              private jwtHelperService: JwtHelperService) { }
  ListProduct : Product[] = [];
  ListProductTarget: Product[] = [];
  ListProductDisplay :Product[]=[];
  ngOnInit(): void {

    const tokenObj = this.token();
    var userID = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    var displayname = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    console.log(tokenObj)
    console.log(userID)
    console.log(displayname)
    this.displayname = displayname
   this.api.GetProduct().subscribe(res=>{
     this.ListProduct = res
     this.ListProduct.forEach(p=>{
       p.displayPrice = p.price.toLocaleString('vi',{style:'currency',currency:'VND'})
       /*console.log(p.displayPrice)*/
     })
     for (var i = 0;i<4;i++){
       this.ListProductDisplay.push(this.ListProduct[i]);
     }
     /*console.log(this.ListProductDisplay)*/
   })
  }

  public token = () => {
    const token = localStorage.getItem('token') ?? '';
    const objectToken = this.decodeToken(token);
    return objectToken;
  }

  public decodeToken = (rawToken: string) => this.jwtHelperService?.decodeToken(rawToken);
  displayname: any;


  getNike() {
    this.route.navigate(['/shop'])
    console.log(this.ListProduct)
    this.ListProduct.forEach(p=>{
      if (p.brand == 'Nike'){
        this.ListProductTarget.push(p)
      }
    })
    console.log(this.ListProductTarget)
  }

  trantoCart() {
    const tokenUser = localStorage.getItem('token')
    if (tokenUser == null){
      this.route.navigate(['login'])
    }else{
      this.route.navigate(['cart'])
    }
  }

  trantoBill() {
    const tokenUser = localStorage.getItem('token')
    if (tokenUser == null){
      this.route.navigate(['login'])
    }else{
      this.route.navigate(['bill'])
    }
  }
}
