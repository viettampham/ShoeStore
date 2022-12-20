import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const allorder = document.querySelectorAll('.item-table');
    allorder.forEach(function (order){
      const btnPlus = order.querySelector('.plus');
      const btnMinus = order.querySelector('.minus');
      const displayNum = order.querySelector('.display-num')
      let num = 1;
      console.log(allorder)
      // @ts-ignore
      btnPlus.addEventListener('click',()=>{
        num = num+1;
        // @ts-ignore
        btnMinus.classList.remove('disable')
        console.log(num)
        // @ts-ignore
        displayNum.innerText = num;
      })

      // @ts-ignore
      btnMinus.addEventListener('click',()=>{
        if (num == 1 || num < 1){
          // @ts-ignore
          btnMinus.classList.add('disable')
          num = 0;
          // @ts-ignore
          displayNum.innerText = 0;
        }
        else{
          num = num-1;
          // @ts-ignore
          displayNum.innerText = num;
        }
        console.log(num)
      })
    })

  }
}
