import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import {ApiService} from "../../Services/api.service";
import {Router} from "@angular/router";
import {Order} from "../../Models/Order";
import {Product} from "../../Models/Product";
import {style} from "@angular/animations";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiService,
              private route:Router) { }
  ListProduct : Product[] = [];
  ListProductDisplay :Product[]=[];
  ngOnInit(): void {
   this.api.GetProduct().subscribe(res=>{
     this.ListProduct = res
     this.ListProduct.forEach(p=>{
       p.displayPrice = p.price.toLocaleString('vi',{style:'currency',currency:'VND'})
       console.log(p.displayPrice)
     })
     for (var i = 0;i<4;i++){
       this.ListProductDisplay.push(this.ListProduct[i]);
     }
     console.log(this.ListProductDisplay)
   })
  }
}
