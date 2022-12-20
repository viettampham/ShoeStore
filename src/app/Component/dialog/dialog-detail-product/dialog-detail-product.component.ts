import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-detail-product',
  templateUrl: './dialog-detail-product.component.html',
  styleUrls: ['./dialog-detail-product.component.scss']
})
export class DialogDetailProductComponent implements OnInit {

  constructor(private MatdialogRef:MatDialogRef<DialogDetailProductComponent>) { }

  ngOnInit(): void {
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
      console.log(quantity)
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
      console.log(quantity)
    })
  }

  /*plus() {
    const btnPlus = document.querySelector('.plus');
    const displaynum = document.querySelector('.num');
    let data:number = 0;
    // @ts-ignore
    btnPlus.addEventListener('click',()=>{
      data=data+1;
      // @ts-ignore
      displaynum.innerText = data
      console.log(data)
    })

  }

  minus() {
    const btnMinus = document.querySelector('.minus');
    const displaynum = document.querySelector('.num');
    let data:number = 0;
    // @ts-ignore
    btnMinus.addEventListener('click',()=>{
      data=data-1;
      // @ts-ignore
      displaynum.innerText = data
      console.log(data)
    })

  }*/


  closeDialog() {
      this.MatdialogRef.close()
  }
}
