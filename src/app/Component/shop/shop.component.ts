import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogDetailProductComponent} from "../dialog/dialog-detail-product/dialog-detail-product.component";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  opened = false;

  constructor(private dialog:MatDialog ) { }

  ngOnInit(): void {

  }

  openDialogAdd() {
    this.dialog.open(DialogDetailProductComponent)
  }
}
