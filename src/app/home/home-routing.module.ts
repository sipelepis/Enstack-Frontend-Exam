import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('./home-tab/home-tab.module').then( m => m.HomeTabPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites-tab/favorites-tab.module').then( m => m.FavoritesTabPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications-tab/notifications-tab.module').then( m => m.NotificationsTabPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile-tab/profile-tab.module').then( m => m.ProfileTabPageModule)
      },
      {
        path:'',
        redirectTo:'main',
        pathMatch:'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
