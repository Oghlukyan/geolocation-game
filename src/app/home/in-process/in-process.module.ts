import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InProcessRoutingModule } from './in-process-routing.module';
import { InProcessComponent } from './in-process.component';
import { ActionsPageModule } from '../../actions/actions.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    InProcessComponent
  ],
  imports: [
    CommonModule,
    InProcessRoutingModule,
    ActionsPageModule,
    IonicModule,
  ],
})
export class InProcessModule { }
