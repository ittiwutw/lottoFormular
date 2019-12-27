import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LottoFormularPageRoutingModule } from './lotto-formular-routing.module';

import { LottoFormularPage } from './lotto-formular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottoFormularPageRoutingModule
  ],
  declarations: [LottoFormularPage]
})
export class LottoFormularPageModule {}
