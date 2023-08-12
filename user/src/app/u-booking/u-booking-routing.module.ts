import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UBookingPage } from './u-booking.page';

const routes: Routes = [
  {
    path: '',
    component: UBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UBookingPageRoutingModule {}
