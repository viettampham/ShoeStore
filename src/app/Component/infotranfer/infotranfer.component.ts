import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../Services/api.service";
import {Order} from "../../Models/Order";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-infotranfer',
  templateUrl: './infotranfer.component.html',
  styleUrls: ['./infotranfer.component.scss']
})
export class InfotranferComponent implements OnInit {
  ListOrder:Order[] = [];
  totalBill:number = 0;
  FormInfoTranfer = this.fb.group({
    city:[''],
    district:[''],
    ward:['']
  })
  citys:any;
  quans:any;
  wards:any;
  constructor(private api: ApiService,
              private fb:FormBuilder,
              private route:Router) { }

  ngOnInit(): void {
    this.GetOrder();
    this.GetCity();

  }

  GetOrder(){
    this.api.GetOrder().subscribe(res=>{
      this.ListOrder = res
      this.ListOrder.forEach(order=>{
        this.totalBill = this.totalBill + order.totalMoney;
      })
      /*console.log(this.totalBill)*/
    })
  }

  GetCity(){
    this.api.getCity().subscribe(res=>{
      this.citys = res;
      /*console.log(this.citys)*/

    })
  }

  GetDistrict(event : any) {
    this.api.getDistrict(event.target?.value).subscribe(res=>{
      this.quans = res
      this.FormInfoTranfer.value.city =this.quans.name
      /*console.log(this.FormInfoTranfer.value.city)*/
    })
  }


  GetWard(event: any) {
    this.api.getWard(event.target.value).subscribe(res=>{
      this.wards = res
      this.FormInfoTranfer.value.district =this.wards.name
      /*console.log(this.FormInfoTranfer.value.district)*/
    })
  }


  GetInfoWard(event: any) {
    for (var x in this.wards.wards){
      if (this.wards.wards[x].code == event.target.value){
        this.FormInfoTranfer.value.ward = this.wards.wards[x].name
      }
    }
   /* console.log(this.FormInfoTranfer.value.ward)*/
  }

  Book() {
    // @ts-ignore
    var x = document.forms["forminfo"]["infoRecipient"].value
    // @ts-ignore
    var y = document.forms["forminfo"]["phoneNumber"].value

    if (x == ''){
      alert("B???n ch??a nh???p th??ng tin ng?????i nh???n.")
      /*location.reload()*/
    }
    else if(y==''){
      alert("B???n ch??a nh???p s??? ??i???n tho???i li??n l???c.")
    }
    else if(this.FormInfoTranfer.value.city == ''){
      alert("B???n ch??a nh???p th??nh ph???.")
    }
    else if(this.FormInfoTranfer.value.district == ''){
      alert("B???n ch??a nh???p ph?????ng, qu???n, huy???n.")
    }
    else if(this.FormInfoTranfer.value.ward == ''){
      alert("B???n ch??a nh???p x??.")
    }else{
      this.route.navigate(['/bill'])
    }

     console.log(x)
     console.log(y)
     console.log(this.FormInfoTranfer.value.city)
     console.log(this.FormInfoTranfer.value.district)
     console.log(this.FormInfoTranfer.value.ward)
  }
}
