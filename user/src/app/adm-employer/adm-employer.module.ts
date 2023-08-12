import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmEmployerPageRoutingModule } from './adm-employer-routing.module';

import { AdmEmployerPage } from './adm-employer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmEmployerPageRoutingModule
  ],
  declarations: [AdmEmployerPage]
})
export class AdmEmployerPageModule {}
