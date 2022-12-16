import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../../Services/api.service";
import {LoginRequest} from "../../Models/LoginRequest";
import {Router} from "@angular/router";
import {RegistrationRequest} from "../../Models/RegistrationRequest";

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
              private route:Router) {
  }

  ngOnInit(): void {
  }


  openregistraion() {
    const loginLayout = document.querySelector('.login-layout');
    const regisLayout = document.querySelector('.registration-layout');
    const btnPlus = document.querySelector('.icon-plus');

    // @ts-ignore
    btnPlus.addEventListener('click', openRegistration)

    function openRegistration() {
      // @ts-ignore
      loginLayout.classList.add('hidden')
      // @ts-ignore
      regisLayout.classList.remove('hidden')
      // @ts-ignore
      regisLayout.classList.add('appear')
    }

  }

  openLogin() {
    const loginLayout = document.querySelector('.login-layout');
    const regisLayout = document.querySelector('.registration-layout');
    const btnReturn = document.querySelector('.icon-return');
    // @ts-ignore
    btnReturn.addEventListener('click', openLogin)

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
        this.route.navigate(['/home'])
      }
    },error => {
      alert("Username or password incorrect")
    })
  }

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
