import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmPage } from './adm.page';

const routes: Routes = [
  {
    path: '',
    component: AdmPage
  },

  {
    path: 'adm-employer',
    loadChildren: () => import('../adm-employer/adm-employer.module').then( m => m.AdmEmployerPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmPageRoutingModule {}
