import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../../Models/Product";
import {ShopComponent} from "../../shop/shop.component";
import {ApiService} from "../../../Services/api.service";

@Component({
  selector: 'app-dialog-detail-product',
  templateUrl: './dialog-detail-product.component.html',
  styleUrls: ['./dialog-detail-product.component.scss']
})
export class DialogDetailProductComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private api:ApiService,
              private dialogRef:MatDialogRef<DialogDetailProductComponent>) { }
  product : Product = this.data;
  ngOnInit(): void {
    this.api.GetProductById(this.data).subscribe(res=>{
      this.product = res
      console.log(this.product)
    })
    const btnPlus = document.querySelector('.plus');
    const btnMinus = document.querySelector('.minus');
    const displaynum = document.querySelector('.num');
    let quantity :number = 0;
    if (quantity == 0 || quantity < 0){
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
      // @ts-ignore
      displaynum.innerText = quantity
      // @ts-ignore
      btnMinus.classList.remove('disable')
    })
    // @ts-ignore
    btnMinus.addEventListener('click',()=>{
      if (quantity == 1 || quantity == 0){

        // @ts-ignore
        btnMinus.classList.add('disable')
        quantity = 0;
        // @ts-ignore
        displaynum.innerText = quantity;
      }else{
        quantity = quantity-1;
        // @ts-ignore
        displaynum.innerText = quantity;
      }
    })
  }


  closeDialog() {
      this.dialogRef.close()
  }



}
