import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmReceiptPage } from './adm-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: AdmReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmReceiptPageRoutingModule {}
