import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmAppointmentPageRoutingModule } from './adm-appointment-routing.module';

import { AdmAppointmentPage } from './adm-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmAppointmentPageRoutingModule
  ],
  declarations: [AdmAppointmentPage]
})
export class AdmAppointmentPageModule {}
