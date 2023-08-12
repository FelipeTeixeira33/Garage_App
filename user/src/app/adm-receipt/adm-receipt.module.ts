import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmReceiptPageRoutingModule } from './adm-receipt-routing.module';

import { AdmReceiptPage } from './adm-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmReceiptPageRoutingModule
  ],
  declarations: [AdmReceiptPage]
})
export class AdmReceiptPageModule {}
