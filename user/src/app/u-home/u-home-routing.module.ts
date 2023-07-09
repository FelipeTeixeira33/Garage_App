import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UHomePage } from './u-home.page';

const routes: Routes = [
  {
    path: '',
    component: UHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UHomePageRoutingModule {}
