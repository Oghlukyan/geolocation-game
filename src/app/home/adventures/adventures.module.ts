import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdventuresPageRoutingModule } from './adventures-routing.module';

import { AdventuresPage } from './adventures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdventuresPageRoutingModule,
  ],
  declarations: [AdventuresPage],
})
export class AdventuresPageModule {
}
