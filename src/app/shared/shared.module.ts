import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from './components/main-card/main-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations:[MainCardComponent],
  imports: [CommonModule, IonicModule.forRoot(),],
  exports:[MainCardComponent]
})
export class SharedModule {}
