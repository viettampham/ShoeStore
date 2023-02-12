import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../../Models/Product";
import {ShopComponent} from "../../shop/shop.component";
import {ApiService} from "../../../Services/api.service";
import {Order} from "../../../Models/Order";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CreateOrderRequest} from "../../../Models/CreateOrderRequest";
import {coerceNumberProperty} from "@angular/cdk/coercion";
import {style} from "@angular/animations";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-detail-product',
  templateUrl: './dialog-detail-product.component.html',
  styleUrls: ['./dialog-detail-product.component.scss']
})
export class DialogDetailProductComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private api:ApiService,
              private route:Router,
              private dialogRef:MatDialogRef<DialogDetailProductComponent>,
              private fb:FormBuilder,
              private jwtHelperService: JwtHelperService) { }
  product : Product = this.data;
  numberOrder :number = 1;
  formCreateOrder = this.fb.group({
    userID:[''],
    productID:[''],
    quantityOrder:[]
  })
  ngOnInit(): void {
    /*console.log(this.product)*/

    //chinh so luong san pham
    const btnPlus = document.querySelector('.plus');
    const btnMinus = document.querySelector('.minus');
    const displaynum = document.querySelector('.num');
    let quantity :number = 1;
    if (quantity == 1 || quantity < 1){
      // @ts-ignore
      btnMinus.classList.add('disable')
    }
    if (quantity>0){
      // @ts-ignore
      btnMinus.classList.remove('disable')
    }
    // @ts-ignore
    btnPlus.addEventListener('click',()=>{
      quantity = quantity+1;
      this.numberOrder = quantity;
      // @ts-ignore
      displaynum.innerText = quantity
      // @ts-ignore
      btnMinus.classList.remove('disable')
      console.log(quantity)
    })
    // @ts-ignore
    btnMinus.addEventListener('click',()=>{
      if (quantity == 1 || quantity == 0){

        // @ts-ignore
        btnMinus.classList.add('disable')
        quantity = 1;
        // @ts-ignore
        displaynum.innerText = quantity;
      }else{
        quantity = quantity-1;
        this.numberOrder = quantity;
        // @ts-ignore
        displaynum.innerText = quantity;
      }
      /*console.log(quantity)*/
    })
  }

  public token = () => {
    const token = localStorage.getItem('token') ?? '';
    const objectToken = this.decodeToken(token);
    return objectToken;
  }

  public decodeToken = (rawToken: string) => this.jwtHelperService?.decodeToken(rawToken);


  closeDialog() {
      this.dialogRef.close()
  }


  createOrder(id:string){
    const tokenObj = this.token();
    // @ts-ignore
    var userID = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    var displayname = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    this.formCreateOrder.value.userID = userID;
    this.formCreateOrder.value.productID = id;

    // @ts-ignore
    this.formCreateOrder.value.quantityOrder = this.numberOrder;
    // @ts-ignore
    this.api.CreateOrder(this.formCreateOrder.value as CreateOrderRequest).subscribe(res=>{
      alert("Thêm vào giỏ hàng thành công")
      this.dialogRef.close()
    },error => {
      alert("Error")    })
  }



}
