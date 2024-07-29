import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapbusPageRoutingModule } from './mapbus-routing.module';

import { MapbusPage } from './mapbus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapbusPageRoutingModule
  ],
  declarations: [MapbusPage]
})
export class MapbusPageModule {}
