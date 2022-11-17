import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
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
}
