import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionsPageRoutingModule } from './actions-routing.module';

import { ActionsPage } from './actions.page';
import { ActionModule } from '../shared/components/action/action.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ActionsPageRoutingModule,
        ActionModule,
    ],
    exports: [
        ActionsPage,
    ],
    declarations: [ActionsPage],
})
export class ActionsPageModule {}
