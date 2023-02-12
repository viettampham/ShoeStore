import { Component, OnInit } from '@angular/core';
import {Cart} from "../../Models/Cart";
import {ApiService} from "../../Services/api.service";
import {Order} from "../../Models/Order";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ListOrder:Order[] = [];
  totalCart:number = 0;
  disPlayTotalCart:any;
  // @ts-ignore
  Cart : Cart;
  FormAddBill = this.fb.group({
    userID:[''],
    addressTranfer:[''],
    nameCustomer:[''],
    phoneNumber:['']
  })
  constructor(private api:ApiService,
              private route: Router,
              private fb:FormBuilder,
              private jwtHelperService: JwtHelperService) { }

  ngOnInit(): void {
    this.GetOrder();
  }

  public token = () => {
    const token = localStorage.getItem('token') ?? '';
    const objectToken = this.decodeToken(token);
    return objectToken;
  }

  public decodeToken = (rawToken: string) => this.jwtHelperService?.decodeToken(rawToken);

  GetOrder(){
    const tokenObj = this.token();
    // @ts-ignore
    var userID = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

    this.api.GetOrderByUser(userID).subscribe(res=>{
      this.ListOrder = res
      this.ListOrder.forEach(o=>{
        o.displayPrice = o.price.toLocaleString('vi',{style:'currency',currency:'VND'})
        o.displayTotalMoneyOrder = o.totalMoney.toLocaleString('vi',{style:'currency',currency:'VND'})
       this.totalCart = this.totalCart + o.totalMoney
      })
      this.disPlayTotalCart = this.totalCart.toLocaleString('vi', { style: 'currency', currency: 'VND' })
      /*console.log(this.ListOrder)
      console.log(this.totalCart)
      console.log(this.ListOrder)*/
    })
  }

  DeleteOrderByID(orderID: string) {
    console.log(orderID)
    if (confirm("Bạn có muốn xóa sản phầm này khỏi giỏ hàng ?")){
      this.api.DeleteOrderByID(orderID).subscribe(res=>{
        alert("Xóa thành công")
        location.reload()
      })
    }
  }


  hanleCreateBill() {
    this.route.navigate(['infotranfer'])
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
