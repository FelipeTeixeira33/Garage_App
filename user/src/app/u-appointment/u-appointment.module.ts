import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UAppointmentPageRoutingModule } from './u-appointment-routing.module';

import { UAppointmentPage } from './u-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UAppointmentPageRoutingModule
  ],
  declarations: [UAppointmentPage]
})
export class UAppointmentPageModule {}
