import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChairPage } from './chair.page';

const routes: Routes = [
  {
    path: '',
    component: ChairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChairPageRoutingModule {}
