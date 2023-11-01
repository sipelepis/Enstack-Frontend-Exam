import { Component, Input, OnInit } from '@angular/core';
import { DataInterface } from '../shared/types/data.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../shared/services/item.service';
import { AddToCartService } from '../shared/services/add.to.cart.service';
import { AddToFavoritesService } from '../shared/services/add.to.favorites.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  item!: DataInterface;
  quantity: number = 0;

  constructor(
    private addToCartService: AddToCartService,
    private addToFavorites: AddToFavoritesService,
    private itemService: ItemService,
    private route: Router
    ) { }


  ngOnInit() {
    this.item = this.itemService.getItem();
  }
  // Navigate
  navHome(){
    this.route.navigate(['/home']);
  }
  // Increment and Decrement
  increment() {
    if(this.quantity < this.item.stock){
      this.quantity++;
    }
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  // Cart
  addItemToCart() {
    if(this.quantity > 0){
      this.quantity = 0;
      this.addToCartService.addItemToCart(this.item!);
    }
  }
  removeItemToCart() {
    this.addToCartService.removeItemFromCartByName(this.item!);
  }
  isItemExistInCart(): boolean {
    return this.addToCartService.itemExistsInCart(this.item!);
  }
  // Favorites
  addItemToFavorites() {
    this.addToFavorites.addItemToFavorites(this.item!);
  }
  removeItemToFavorites() {
    this.addToFavorites.removeItemFromFavoritesByName(this.item!);
  }
  isItemExistInFavorites(): boolean {
    return this.addToFavorites.itemExistsInFavorites(this.item!);
  }

}
