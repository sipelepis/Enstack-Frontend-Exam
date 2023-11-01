import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { DataInterface } from '../../types/data.model';
import { AddToFavoritesService } from '../../services/add.to.favorites.service';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite.card.component.html',
  styleUrls: ['./favorite.card.component.scss'],
})
export class FavoriteCardComponent implements OnInit {
  @Input() item!: DataInterface;
  // item!: DataInterface;
  constructor(private route: Router, private itemService: ItemService,private addToFavorites: AddToFavoritesService) { }

  ngOnInit() {}
  openItemComponent(){
    this.itemService.setItem(this.item);
    this.route.navigate(['/item']);
  }
  // Favorites
  removeItemToFavorites() {
    this.addToFavorites.removeItemFromFavoritesByName(this.item!);
  }
}
