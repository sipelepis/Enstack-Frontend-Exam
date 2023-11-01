import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from './components/main-card/main-card.component';
import { IonicModule } from '@ionic/angular';
import { FavoriteCardComponent } from './components/favorite.card/favorite.card.component';

@NgModule({
  declarations:[MainCardComponent,FavoriteCardComponent],
  imports: [CommonModule, IonicModule.forRoot(),],
  exports:[MainCardComponent, FavoriteCardComponent]
})
export class SharedModule {}
