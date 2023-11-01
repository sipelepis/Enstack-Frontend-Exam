import { Injectable } from '@angular/core';
import { DataInterface } from '../types/data.model';

@Injectable({
  providedIn: 'root'
})
export class AddToFavoritesService {
  favorites?: DataInterface[] = [];
  constructor() { }
  addItemToFavorites(item: DataInterface){
    this.favorites?.push(item)
  }
  removeItemFromFavoritesByName(item: DataInterface) {
    const index = this.favorites!.findIndex(favorites => favorites.name === item.name);
    if (index !== -1) {
      this.favorites?.splice(index, 1);
    }
  }
  getFavoritesItems() {
    return this.favorites;
  }
  clearFavorites() {
    this.favorites = [];
  }
  itemExistsInFavorites(item: DataInterface): boolean {
    if (this.favorites!.length === 0) {
      return false;
    }
    return this.favorites!.some(favoritesItem => favoritesItem.name === item.name);
  }
}
