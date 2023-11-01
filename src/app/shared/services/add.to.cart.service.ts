import { Injectable } from '@angular/core';
import { DataInterface } from '../types/data.model';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  cart?: DataInterface[] = [];
  constructor() { }
  addItemToCart(item: DataInterface){
    this.cart?.push(item)
  }
  removeItemFromCartByName(item: DataInterface) {
    const index = this.cart!.findIndex(cart => cart.name === item.name);
    if (index !== -1) {
      this.cart?.splice(index, 1);
    }
  }
  getCartItems() {
    return this.cart;
  }
  clearCart() {
    this.cart = [];
  }
  itemExistsInCart(item: DataInterface): boolean {
    if (this.cart!.length === 0) {
      return false;
    }
    return this.cart!.some(cartItem => cartItem.name === item.name);
  }
}
