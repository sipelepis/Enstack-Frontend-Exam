import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesTabPage } from './favorites-tab.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesTabPageRoutingModule {}
