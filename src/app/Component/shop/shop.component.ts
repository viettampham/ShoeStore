import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogDetailProductComponent} from "../dialog/dialog-detail-product/dialog-detail-product.component";
import {ApiService} from "../../Services/api.service";
import {Product} from "../../Models/Product";
import {Category} from "../../Models/Category";
import {Brand} from "../../Models/Brand";
import {Router} from "@angular/router";

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
  listbrand: string[] = [];
  title = '';
  constructor(private dialog:MatDialog,
              private api:ApiService,
              private route:Router) { }

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
    this.title = '';
    this.api.GetProduct().subscribe(res=>{
      this.ListProduct = res
      this.ListProduct.forEach(p=>{
        p.displayPrice = p.price.toLocaleString('vi',{style:'currency',currency:'VND'})
      })
      /*console.log(this.ListProduct)*/
    })
  }

  getProductByCategory(){
    console.log(this.ListProduct)
  }


  getCategory(){
    this.api.GetCategoryProduct().subscribe(res=>{
      this.ListCategory = res
    })
  }



  /*HandleGet(id: string) {
    this.api.GetProductByCategoryID(id).subscribe(res=>{
      this.ListProduct = res
      this.title = res.product.category.name
      console.log(this.ListProduct)
      console.log(this.title)
    })
  }*/


  HandleGetByBrand(brand: string) {
    this.title = brand
    this.api.GetProductByBrand(brand).subscribe(res=>{
      this.ListProduct = res
      console.log(res)
    })
  }

  handleSearch() {
    // @ts-ignore
    var x = document.forms["search-form"]["text-search"].value
    this.api.SearchProduct(x).subscribe(res=>{
      // @ts-ignore
      this.ListProduct = res
      this.ListProduct.forEach(p=>{
        p.displayPrice = p.price.toLocaleString('vi',{style:'currency',currency:'VND'})
      })
      console.log(this.ListProduct)
    })
  }

  trantoCart() {
    const tokenUser = localStorage.getItem('token')
    if (tokenUser == null){
      this.route.navigate(['login'])
    }else{
      this.route.navigate(['cart'])
    }
  }

  HandleGet(category: Category) {
    this.ListProduct = category.products
    this.title = category.name
  }

  openDialogAdd(product: Product) {
    this.dialog.open(DialogDetailProductComponent,{
      data:product
    })
  }
}
