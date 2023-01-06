import { Component, OnInit } from '@angular/core';
import {Cart} from "../../Models/Cart";
import {ApiService} from "../../Services/api.service";
import {Order} from "../../Models/Order";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ListOrder:Order[]=[];
  totalBill:number = 0;
  displayTotalBill:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.GetOrder()

    const allorder = document.querySelectorAll('.item-table');
    allorder.forEach(function (order){
      const btnPlus = order.querySelector('.plus');
      const btnMinus = order.querySelector('.minus');
      const displayNum = order.querySelector('.display-num')
      let num = 1;
      // @ts-ignore
      btnPlus.addEventListener('click',()=>{
        num = num+1;
        // @ts-ignore
        btnMinus.classList.remove('disable')
        // @ts-ignore
        displayNum.innerText = num;
      })

      // @ts-ignore
      btnMinus.addEventListener('click',()=>{
        if (num == 1 || num < 1){
          // @ts-ignore
          btnMinus.classList.add('disable')
          num = 0;
          // @ts-ignore
          displayNum.innerText = 0;
        }
        else{
          num = num-1;
          // @ts-ignore
          displayNum.innerText = num;
        }
      })
    })

  }
  GetOrder(){
    this.api.GetOrder().subscribe(res=>{
      this.ListOrder = res
      this.ListOrder.forEach(o=>{
        o.displayTotalMoney = o.totalMoney.toLocaleString('vi',{style:'currency' , currency:'VND'})
      })
      /*console.log(this.ListOrder)*/
      this.ListOrder.forEach(order=>{
        this.totalBill = this.totalBill + order.totalMoney
        this.displayTotalBill = this.totalBill.toLocaleString('vi', {style : 'currency', currency : 'VND'})
        /*console.log(this.displayTotalBill);*/

      })
    })
  }

  DeleteOrder(id:string) {
    if (confirm("Bạn có chắc là không muốn mua sản phẩm này chứ ?")){
      this.api.DeleteOrder(id).subscribe(res=>{
        this.GetOrder();
        location.reload()
      })
    }

  }
}
