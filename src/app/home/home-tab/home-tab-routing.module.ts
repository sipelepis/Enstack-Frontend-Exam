import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTabPage } from './home-tab.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTabPage,
    children:[
      {
        path: 'popular',
        loadChildren: () => import('./popular/popular.module').then( m => m.PopularPageModule)
      },
      {
        path: 'chair',
        loadChildren: () => import('./chair/chair.module').then( m => m.ChairPageModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
      },
      {
        path: 'armchair',
        loadChildren: () => import('./armchair/armchair.module').then( m => m.ArmchairPageModule)
      },
      {
        path: 'bed',
        loadChildren: () => import('./bed/bed.module').then( m => m.BedPageModule)
      },
      {
        path:'',
        redirectTo:'popular',
        pathMatch:'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTabPageRoutingModule {}
