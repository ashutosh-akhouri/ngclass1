import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  inputData = {item:"Phone",  quantity:1};

  items:any[] = []; // cart

  result:number;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  delItem(i){
    // i - full item obj
    // let index = this.items.indexOf(i);
    // this.items.splice(index, 1);
    this.items.splice(i, 1);
    this.cart.setItems(this.items);
  }

  addToCart(){
    this.items.push({item: this.inputData.item, quantity: this.inputData.quantity});
    this.cart.setItems(this.items);
  }

  onCalc(){
    // let inputA = <HTMLInputElement>document.getElementById("inpA");
    // alert(inputA.value)
    // let sum:number = this.inputData.valA + this.inputData.valB;
    // this.result = sum;
  }

}


