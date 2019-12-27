import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LottoResultPageRoutingModule } from './lotto-result-routing.module';

import { LottoResultPage } from './lotto-result.page';

import { SelectFormularModalPageModule } from '../select-formular-modal/select-formular-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottoResultPageRoutingModule,
    SelectFormularModalPageModule
  ],
  declarations: [LottoResultPage]
})
export class LottoResultPageModule {}
