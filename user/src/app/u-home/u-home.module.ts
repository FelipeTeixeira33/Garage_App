import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UHomePageRoutingModule } from './u-home-routing.module';

import { UHomePage } from './u-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UHomePageRoutingModule
  ],
  declarations: [UHomePage]
})
export class UHomePageModule {}
