import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UDetailPage } from './u-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UDetailPageRoutingModule {}
