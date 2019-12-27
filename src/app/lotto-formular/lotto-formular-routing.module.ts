import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LottoFormularPage } from './lotto-formular.page';

const routes: Routes = [
  {
    path: '',
    component: LottoFormularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LottoFormularPageRoutingModule {}
