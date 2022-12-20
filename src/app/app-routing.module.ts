import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Component/login/login.component";
import {HomeComponent} from "./Component/home/home.component";
import {ShopComponent} from "./Component/shop/shop.component";
import {IntroduceComponent} from "./Component/introduce/introduce.component";
import {CartComponent} from "./Component/cart/cart.component";
import {PaymentComponent} from "./Component/payment/payment.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'introduce',component:IntroduceComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'payment',component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
