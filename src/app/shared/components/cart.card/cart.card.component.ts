import { Component, Input, OnInit } from '@angular/core';
import { CartInterface, DataInterface } from '../../types/data.model';
import { AddToCartService } from '../../services/add.to.cart.service';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { CartLogicService } from '../../services/cart-logic.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart.card.component.html',
  styleUrls: ['./cart.card.component.scss'],
})
export class CartCardComponent  implements OnInit {
  @Input() item!: DataInterface;
  quantity: number = 0;
  private localTotal: number = 0;
  constructor(private cartLogicService: CartLogicService,private route: Router, private addToCart: AddToCartService) { }
  ionViewDidEnter(){

  }
  ngOnInit() {

  }
  removeItemFromCart(){
    this.cartLogicService.decTotal(this.localTotal);
    this.addToCart.removeItemFromCartByName(this.item!)
  }
  // Increment and Decrement
  increment() {
    if(this.quantity < this.item.stock){
      this.localTotal += this.item.price;
      this.cartLogicService.incTotal(this.item.price);
      this.quantity++;
    }
  }
  decrement() {
    if (this.quantity > 0) {
      this.localTotal -= this.item.price;
      this.cartLogicService.decTotal(this.item.price);
      this.quantity--;
    }
  }
}
