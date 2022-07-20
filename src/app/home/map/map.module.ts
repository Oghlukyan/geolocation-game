import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';
import { ViewtypeSegmentModule } from '../../shared/common-components/viewtype-segment/viewtype-segment.module';
import { OnlyMapModule } from '../../shared/only-map/only-map.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    ViewtypeSegmentModule,
    OnlyMapModule,
  ],
  declarations: [MapPage],
})
export class MapPageModule {
}
