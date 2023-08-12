import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmEmployerPage } from './adm-employer.page';

const routes: Routes = [
  {
    path: '',
    component: AdmEmployerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmEmployerPageRoutingModule {}
