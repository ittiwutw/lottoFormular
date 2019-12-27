import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectFormularModalPage } from './select-formular-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SelectFormularModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectFormularModalPageRoutingModule {}
