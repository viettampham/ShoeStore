export class RegistrationRequest{
  username:string;
  name:string;
  address:string;
  password:string;
  confirmpasswor:string;

  constructor(username: string, name: string, address: string, password: string, confirmpasswor: string) {
    this.username = username;
    this.name = name;
    this.address = address;
    this.password = password;
    this.confirmpasswor = confirmpasswor;
  }
}
