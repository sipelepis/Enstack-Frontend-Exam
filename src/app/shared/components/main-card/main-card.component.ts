import { Component, Input, OnInit } from '@angular/core';
import { DataInterface } from '../../types/data.model';
import { AddToCartService } from '../../services/add.to.cart.service';
import { AddToFavoritesService } from '../../services/add.to.favorites.service';

import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent implements OnInit {
  @Input() item!: DataInterface;
  cart?: DataInterface[];
  constructor(
    private addToCartService: AddToCartService,
    private addToFavorites: AddToFavoritesService,
    private itemService: ItemService,
    private route: Router
    ) {}
  ngOnInit() {
    this.cart = this.addToCartService.getCartItems();
  }
  // Cart
  addItemToCart() {
    this.addToCartService.addItemToCart(this.item!);
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
  // openItemComp
  openItemComponent(){
    this.itemService.setItem(this.item);
    this.route.navigate(['/item']);
  }
}
