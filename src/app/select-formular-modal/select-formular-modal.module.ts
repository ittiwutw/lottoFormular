import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectFormularModalPageRoutingModule } from './select-formular-modal-routing.module';

import { SelectFormularModalPage } from './select-formular-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectFormularModalPageRoutingModule
  ],
  declarations: [SelectFormularModalPage]
})
export class SelectFormularModalPageModule {}
