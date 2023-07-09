import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UDetailPageRoutingModule } from './u-detail-routing.module';
import { UDetailPage } from './u-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UDetailPageRoutingModule
  ],
  declarations: [UDetailPage]
})
export class UDetailPageModule {}
