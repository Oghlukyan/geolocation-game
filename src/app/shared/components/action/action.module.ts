import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action.component';
import { IonicModule } from '@ionic/angular';
import { OnlyMapModule } from '../../only-map/only-map.module';


@NgModule({
  declarations: [
    ActionComponent,
  ],
    imports: [
        CommonModule,
        IonicModule,
        OnlyMapModule,
    ],
  exports: [
    ActionComponent,
  ],
})
export class ActionModule {
}
