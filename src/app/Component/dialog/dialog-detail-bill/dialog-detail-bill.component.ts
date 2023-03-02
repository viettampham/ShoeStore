import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {style} from "@angular/animations";
import {Order} from "../../../Models/Order";
import {ApiService} from "../../../Services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-detail-bill',
  templateUrl: './dialog-detail-bill.component.html',
  styleUrls: ['./dialog-detail-bill.component.scss']
})
export class DialogDetailBillComponent implements OnInit {
  ispayed = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private api:ApiService,
              private route:Router) { }

  ngOnInit(): void {
    //console.log(this.data)
    this.ispayed = this.data.isPayed
    //console.log(this.ispayed)
    // @ts-ignore
    this.data.forEach(b=>{
      // @ts-ignore
      b.orders.forEach(o=>{
        o.displayPrice = o.price.toLocaleString('vi',{style:'currency',currency:'VND'})
        o.displayTotalMoneyOrder = o.totalMoney.toLocaleString('vi',{style:'currency',currency:'VND'})
      })
    })
  }

  ConfirmBill(billID: any) {
    //console.log(billID)
    this.api.ConfirmBill(billID).subscribe(res=>{
      alert("Success")
      location.reload()
    },error => alert("error"))
    this.route.navigate(['shop'])
  }
}
