import {Order} from "./Order";

export class Bill{
  billID:string;
  userID:string;
  orders:Order[];
  totalBill:number;
  addressTranfer:string;
  nameCustomer:string;
  phoneNumber:string;
  isPayed:boolean;

  constructor(billID: string, userID: string, orders: any, totalBill: number, addressTranfer: string, nameCustomer: string, phoneNumber: string, isPayed: boolean) {
    this.billID = billID;
    this.userID = userID;
    this.orders = orders;
    this.totalBill = totalBill;
    this.addressTranfer = addressTranfer;
    this.nameCustomer = nameCustomer;
    this.phoneNumber = phoneNumber;
    this.isPayed = isPayed;
  }
}
