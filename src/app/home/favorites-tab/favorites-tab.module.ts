import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesTabPageRoutingModule } from './favorites-tab-routing.module';

import { FavoritesTabPage } from './favorites-tab.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesTabPageRoutingModule,
    SharedModule
  ],
  declarations: [FavoritesTabPage]
})
export class FavoritesTabPageModule {}
