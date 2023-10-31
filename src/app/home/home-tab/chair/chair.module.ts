import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChairPageRoutingModule } from './chair-routing.module';

import { ChairPage } from './chair.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChairPageRoutingModule,
    SharedModule
  ],
  declarations: [ChairPage]
})
export class ChairPageModule {}
