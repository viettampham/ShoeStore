import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
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
