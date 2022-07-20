import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewtypeSegmentComponent } from './viewtype-segment.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ViewtypeSegmentComponent
  ],
  exports: [
    ViewtypeSegmentComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
    ],
})
export class ViewtypeSegmentModule {
}
