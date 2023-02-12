export class CreateBillRequest{
  userID:string;
  addressTranfer:string;
  nameCustomer:string;
  phoneNumber:string;

  constructor(userID: string, addressTranfer: string, nameCustomer: string, phoneNumber: string) {
    this.userID = userID;
    this.addressTranfer = addressTranfer;
    this.nameCustomer = nameCustomer;
    this.phoneNumber = phoneNumber;
  }
}
