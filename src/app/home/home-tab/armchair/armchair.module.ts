import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmchairPageRoutingModule } from './armchair-routing.module';

import { ArmchairPage } from './armchair.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmchairPageRoutingModule,
    SharedModule
  ],
  declarations: [ArmchairPage]
})
export class ArmchairPageModule {}
