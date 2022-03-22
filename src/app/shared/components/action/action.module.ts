import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ActionComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ActionComponent,
  ],
})
export class ActionModule {
}
