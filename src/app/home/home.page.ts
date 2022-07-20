import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdventure } from '../core/interfaces/adventure.interface';
import { NavController } from '@ionic/angular';
import { AdventureService } from './services/adventure.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}
