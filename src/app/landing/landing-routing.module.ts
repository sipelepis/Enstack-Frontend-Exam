import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPage } from './landing.page';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
