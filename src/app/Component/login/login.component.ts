import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../../Services/api.service";
import {LoginRequest} from "../../Models/LoginRequest";
import {Router} from "@angular/router";
import {RegistrationRequest} from "../../Models/RegistrationRequest";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm = this.fb.group({
    username: [''],
    password: ['']
  });
  SigninForm = this.fb.group({
    username:[''],
    name:[''],
    address:[''],
    password:[''],
    confirmpassword:['']
  });

  constructor(private fb:FormBuilder,
              private apiServices :ApiService,
              private route:Router,
              private jwtHelperService: JwtHelperService) {
  }

  ngOnInit(): void {
    const loginLayout = document.querySelector('.login-layout');
    const regisLayout = document.querySelector('.registration-layout');
    const btnPlus = document.querySelector('.icon-plus');
    const btnReturn = document.querySelector('.icon-return');

    // @ts-ignore
    btnPlus.addEventListener('click', openRegistration)
    // @ts-ignore
    btnReturn.addEventListener('click', openLogin)
    function openRegistration() {
      // @ts-ignore
      loginLayout.classList.add('hidden')
      // @ts-ignore
      regisLayout.classList.remove('hidden')
      // @ts-ignore
      regisLayout.classList.add('appear')
    }
    function openLogin() {
      // @ts-ignore
      regisLayout.classList.add('hidden')
      // @ts-ignore
      loginLayout.classList.remove('hidden')
      // @ts-ignore
      loginLayout.classList.add('appear')
    }
  }



  Login() {
    this.apiServices.Login(this.LoginForm.value as LoginRequest).subscribe(res=>{
      if (res.token!=null){
        localStorage.setItem("token",res?.token);
        this.route.navigate(['home'])
        const tokenObj = this.token();
        // @ts-ignore
        var userID = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
        var displayname = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
        /*console.log(tokenObj)
        console.log(userID)
        console.log(displayname)*/
      }
    },error => {
      alert("Username or password incorrect")
    })
  }

  public token = () => {
    const token = localStorage.getItem('token') ?? '';
    const objectToken = this.decodeToken(token);
    return objectToken;
  }

  public decodeToken = (rawToken: string) => this.jwtHelperService?.decodeToken(rawToken);

  Signin() {
    if (this.SigninForm.value.confirmpassword != this.SigninForm.value.password){
      alert("Mật khẩu chưa được xác nhận")
    }
    if (this.SigninForm.value.confirmpassword == this.SigninForm.value.password && this.LoginForm.value.username != null){
      this.apiServices.Signin(this.SigninForm.value as RegistrationRequest).subscribe(res=>{
        this.route.navigate(['home'])
      })
    }
  }


}
