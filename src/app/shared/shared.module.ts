import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from './components/main-card/main-card.component';
import { IonicModule } from '@ionic/angular';
import { FavoriteCardComponent } from './components/favorite.card/favorite.card.component';
import { CartCardComponent } from './components/cart.card/cart.card.component';

@NgModule({
  declarations:[MainCardComponent,FavoriteCardComponent,CartCardComponent],
  imports: [CommonModule, IonicModule.forRoot(),],
  exports:[MainCardComponent, FavoriteCardComponent,CartCardComponent]
})
export class SharedModule {}
