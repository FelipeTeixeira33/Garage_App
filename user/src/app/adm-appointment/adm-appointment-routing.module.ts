import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmAppointmentPage } from './adm-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: AdmAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmAppointmentPageRoutingModule {}
