import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../Services/api.service";
import {Order} from "../../Models/Order";
import {coerceNumberProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  ListOrder:Order[] = [];
  totalBill:number = 0;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.GetOrder();
  }

  GetOrder(){
    this.api.GetOrder().subscribe(res=>{
      this.ListOrder = res
      console.log(this.ListOrder)
      this.ListOrder.forEach(order=>{
        this.totalBill = this.totalBill + order.totalMoney;
      })
      console.log(this.totalBill)
    })

  }
}
