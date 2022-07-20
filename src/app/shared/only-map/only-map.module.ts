import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyMapComponent } from './only-map.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [OnlyMapComponent],
  exports: [OnlyMapComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
  ],
})
export class OnlyMapModule {
}
