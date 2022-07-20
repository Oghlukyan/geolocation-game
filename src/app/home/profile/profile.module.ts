import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { IonicModule } from '@ionic/angular';
import { AdventuresPageModule } from '../adventures/adventures.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    IonicModule,
    AdventuresPageModule,
  ],
})
export class ProfileModule { }
