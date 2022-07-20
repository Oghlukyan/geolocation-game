import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdventuresPageRoutingModule } from './adventures-routing.module';

import { AdventuresPage } from './adventures.page';
import { ViewtypeSegmentModule } from '../../shared/common-components/viewtype-segment/viewtype-segment.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdventuresPageRoutingModule,
        ViewtypeSegmentModule,
    ],
    declarations: [AdventuresPage],
    exports: [
        AdventuresPage,
    ],
})
export class AdventuresPageModule {
}
