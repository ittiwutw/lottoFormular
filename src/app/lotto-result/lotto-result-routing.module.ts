import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LottoResultPage } from './lotto-result.page';

const routes: Routes = [
  {
    path: '',
    component: LottoResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LottoResultPageRoutingModule {}
