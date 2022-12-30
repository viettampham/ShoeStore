import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogDetailProductComponent} from "../dialog/dialog-detail-product/dialog-detail-product.component";
import {ApiService} from "../../Services/api.service";
import {Product} from "../../Models/Product";
import {Category} from "../../Models/Category";
import {Brand} from "../../Models/Brand";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  opened = false;
  Product:any;
  ListProduct: Product[] = [];
  ListCategory: Category[]= [];
  listbrand: Brand[] = [];
  constructor(private dialog:MatDialog,
              private api:ApiService) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
    this.getBrand();
    const iFiller = document.querySelector('.icon-sidebar');
    const iArrow = document.querySelector('.icon-arrow');

    // @ts-ignore
    iFiller.addEventListener('click',()=>{
      // @ts-ignore
      iFiller.classList.add('hidden');
      // @ts-ignore
      iArrow.classList.remove('hidden');
    })

    // @ts-ignore
    iArrow.addEventListener('click',()=>{
      // @ts-ignore
      iArrow.classList.add('hidden');
      // @ts-ignore
      iFiller.classList.remove('hidden')
    })

  }

  getBrand(){
    this.api.GetBrand().subscribe(res=>{
      this.listbrand = res;
    })
  }

  getProduct(){
    this.api.GetProduct().subscribe(res=>{
      this.ListProduct = res
    })
  }
  getCategory(){
    this.api.GetCategoryProduct().subscribe(res=>{
      this.ListCategory = res
    })
  }

  openDialogAdd(id:string) {
    this.dialog.open(DialogDetailProductComponent,{
      data:id
    })
  }
}
