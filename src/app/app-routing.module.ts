import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'lotto-result',
    loadChildren: () => import('./lotto-result/lotto-result.module').then( m => m.LottoResultPageModule)
  },
  {
    path: 'lotto-formular',
    loadChildren: () => import('./lotto-formular/lotto-formular.module').then( m => m.LottoFormularPageModule)
  },
  {
    path: 'select-formular-modal',
    loadChildren: () => import('./select-formular-modal/select-formular-modal.module').then( m => m.SelectFormularModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
