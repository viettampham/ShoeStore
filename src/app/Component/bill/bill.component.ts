import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
@Input() FormInfo:any
  constructor() { }

  ngOnInit(): void {
  console.log()
  }

}
