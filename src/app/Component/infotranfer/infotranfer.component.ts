import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../Services/api.service";
import {Order} from "../../Models/Order";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {style} from "@angular/animations";
import {JwtHelperService} from "@auth0/angular-jwt";
import {CreateBillRequest} from "../../Models/CreateBillRequest";

@Component({
  selector: 'app-infotranfer',
  templateUrl: './infotranfer.component.html',
  styleUrls: ['./infotranfer.component.scss']
})
export class InfotranferComponent implements OnInit {
  ListOrder: Order[] = [];
  totalBill: number = 0;
  displayTotalBill: string = '';
  FormInfoTranfer = this.fb.group({
    city: [''],
    district: [''],
    ward: ['']
  })

  FormCreateBill = this.fb.group({
    userID:[''],
    addressTranfer:[''],
    nameCustomer:[''],
    phoneNumber:['']
  })

  citys: any;
  quans: any;
  wards: any;

  constructor(private api: ApiService,
              private fb: FormBuilder,
              private route: Router,
              private jwtHelperService: JwtHelperService) {
  }

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
        this.totalBill = this.totalBill + o.totalMoney
      })
      this.displayTotalBill = this.totalBill.toLocaleString('vi', { style: 'currency', currency: 'VND' })
      /*console.log(this.ListOrder)
      console.log(this.totalCart)
      console.log(this.ListOrder)*/
    })
  }

  GetCity() {
    this.api.getCity().subscribe(res => {
      this.citys = res;
      /*console.log(this.citys)*/

    })
  }

  GetDistrict(event: any) {
    this.api.getDistrict(event.target?.value).subscribe(res => {
      this.quans = res
      this.FormInfoTranfer.value.city = this.quans.name
      /*console.log(this.FormInfoTranfer.value.city)*/
    })
  }

  GetWard(event: any) {
    this.api.getWard(event.target.value).subscribe(res => {
      this.wards = res
      this.FormInfoTranfer.value.district = this.wards.name
      /*console.log(this.FormInfoTranfer.value.district)*/
    })
  }

  GetInfoWard(event: any) {
    for (var x in this.wards.wards) {
      if (this.wards.wards[x].code == event.target.value) {
        this.FormInfoTranfer.value.ward = this.wards.wards[x].name
      }
    }
  }

  Book()
  {
    // @ts-ignore
    var x = document.forms["forminfo"]["infoRecipient"].value
    // @ts-ignore
    var y = document.forms["forminfo"]["phoneNumber"].value

    /*if (x == '') {
      alert("Bạn chưa nhập thông tin người nhận.")
      /!*location.reload()*!/
    } else if (y == '') {
      alert("Bạn chưa nhập số điện thoại liên lạc.")
    } else if (this.FormInfoTranfer.value.city == '') {
      alert("Bạn chưa nhập thành phố.")
    } else if (this.FormInfoTranfer.value.district == '') {
      alert("Bạn chưa nhập phường, quận, huyện.")
    } else if (this.FormInfoTranfer.value.ward == '') {
      alert("Bạn chưa nhập xã.")
    } else {
      this.route.navigate(['/bill'])
    }*/
    const tokenObj = this.token();
    // @ts-ignore
    var userID = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

    this.FormCreateBill.value.userID = userID;
    // @ts-ignore
    this.FormCreateBill.value.addressTranfer = this.FormInfoTranfer.value.city + this.FormInfoTranfer.value.ward + this.FormInfoTranfer.value.district
    this.FormCreateBill.value.nameCustomer = x
    this.FormCreateBill.value.phoneNumber = y

    this.api.CreateBill(this.FormCreateBill.value as CreateBillRequest)
      .subscribe(res=>{
        alert("Success")
      },error => {
        alert("error")
      })
    // @ts-ignore
    console.log(this.FormCreateBill.value)
    console.log(x)
    console.log(y)
    console.log(this.FormInfoTranfer.value.city)
    console.log(this.FormInfoTranfer.value.district)
    console.log(this.FormInfoTranfer.value.ward)
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
