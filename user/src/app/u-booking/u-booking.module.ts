import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UBookingPageRoutingModule } from './u-booking-routing.module';

import { UBookingPage } from './u-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UBookingPageRoutingModule
  ],
  declarations: [UBookingPage]
})
export class UBookingPageModule {}
