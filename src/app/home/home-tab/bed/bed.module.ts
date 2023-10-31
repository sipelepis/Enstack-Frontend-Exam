import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BedPageRoutingModule } from './bed-routing.module';

import { BedPage } from './bed.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BedPageRoutingModule,
    SharedModule
  ],
  declarations: [BedPage]
})
export class BedPageModule {}
