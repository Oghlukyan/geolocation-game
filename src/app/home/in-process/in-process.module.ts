import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InProcessRoutingModule } from './in-process-routing.module';
import { InProcessComponent } from './in-process.component';


@NgModule({
  declarations: [
    InProcessComponent
  ],
  imports: [
    CommonModule,
    InProcessRoutingModule
  ]
})
export class InProcessModule { }
