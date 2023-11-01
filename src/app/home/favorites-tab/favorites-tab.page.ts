import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AddToFavoritesService } from 'src/app/shared/services/add.to.favorites.service';
import { DataInterface } from 'src/app/shared/types/data.model';

@Component({
  selector: 'app-favorites-tab',
  templateUrl: './favorites-tab.page.html',
  styleUrls: ['./favorites-tab.page.scss'],
})
export class FavoritesTabPage implements OnInit {
  favoriteItems?: DataInterface[] = [];
  constructor(
    private addToFavorites: AddToFavoritesService,
    ) { }

  ionViewDidEnter(){
    this.favoriteItems = this.addToFavorites.getFavoritesItems();
  }
  ngOnInit() {
  }


}
