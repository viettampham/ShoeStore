import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../Services/api.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Bill} from "../../Models/Bill";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {DialogDetailBillComponent} from "../dialog/dialog-detail-bill/dialog-detail-bill.component";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  // @ts-ignore
  ListBill: any = [];
  constructor(private api:ApiService,
              private dialog:MatDialog,
              private jwtHelperService: JwtHelperService) { }
  ngOnInit(): void {
    this.GetAllNoPayed()
  }

  GetAllNoPayed(){
    const tokenObj = this.token();
    // @ts-ignore
    var userID = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

    this.api.GetBillNoPayedUser(userID).subscribe(res=>{
      this.ListBill = res
      // @ts-ignore
      console.log(this.ListBill)
    })
  }

  public token = () => {
    const token = localStorage.getItem('token') ?? '';
    const objectToken = this.decodeToken(token);
    return objectToken;
  }

  public decodeToken = (rawToken: string) => this.jwtHelperService?.decodeToken(rawToken);

  ViewDetailBill(bill: any) {
    this.dialog.open(DialogDetailBillComponent,{
      data:bill
    })
  }

  GetAllPayed() {
    const tokenObj = this.token();
    // @ts-ignore
    var userID = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

    this.api.GetBillPayedUser(userID).subscribe(res=>{
      this.ListBill = res
      console.log(this.ListBill)
    })
  }
}
