import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items;

  constructor() { }

  getItems(){
    return this.items;
  }

  setItems(items){
    this.items = items;
    console.log(JSON.stringify(this.items));
  }
}
