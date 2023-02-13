import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Component/login/login.component";
import {HomeComponent} from "./Component/home/home.component";
import {ShopComponent} from "./Component/shop/shop.component";
import {IntroduceComponent} from "./Component/introduce/introduce.component";
import {CartComponent} from "./Component/cart/cart.component";
import {PaymentComponent} from "./Component/payment/payment.component";
import {InfotranferComponent} from "./Component/infotranfer/infotranfer.component";
import {BillComponent} from "./Component/bill/bill.component";
import {LoadingComponent} from "./Component/loading/loading.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'introduce',component:IntroduceComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'payment',component:PaymentComponent},
  {path:'infotranfer',component:InfotranferComponent},
  {path:'bill',component:BillComponent},
  {path:'loading',component:LoadingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
