import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UAppointmentPage } from './u-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: UAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UAppointmentPageRoutingModule {}
