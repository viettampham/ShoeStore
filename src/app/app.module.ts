import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { HomeComponent } from './Component/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ShopComponent } from './Component/shop/shop.component';
import { IntroduceComponent } from './Component/introduce/introduce.component';
import { CartComponent } from './Component/cart/cart.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { DialogDetailProductComponent } from './Component/dialog/dialog-detail-product/dialog-detail-product.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import { PaymentComponent } from './Component/payment/payment.component';
import { InfotranferComponent } from './Component/infotranfer/infotranfer.component';
import { BillComponent } from './Component/bill/bill.component';
import {MatButtonModule} from "@angular/material/button";
import {JwtModule} from "@auth0/angular-jwt";
import { DialogDetailBillComponent } from './Component/dialog/dialog-detail-bill/dialog-detail-bill.component';
import { LoadingComponent } from './Component/loading/loading.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ShopComponent,
    IntroduceComponent,
    CartComponent,
    DialogDetailProductComponent,
    PaymentComponent,
    InfotranferComponent,
    BillComponent,
    DialogDetailBillComponent,
    LoadingComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSidenavModule,
        MatDialogModule,
        MatTableModule,
        MatButtonModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ["example.com"],
            disallowedRoutes: ["http://example.com/examplebadroute/"],
          },
        }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
