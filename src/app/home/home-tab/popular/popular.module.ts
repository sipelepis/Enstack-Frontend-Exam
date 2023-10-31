import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularPageRoutingModule } from './popular-routing.module';

import { PopularPage } from './popular.page';
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    declarations: [PopularPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PopularPageRoutingModule,
        SharedModule
    ]
})
export class PopularPageModule {}
