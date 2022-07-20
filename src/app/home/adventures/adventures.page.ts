import { Component, OnInit } from '@angular/core';
import { AdventureService } from '../services/adventure.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { IAdventure } from '../../core/interfaces/adventure.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.page.html',
  styleUrls: ['./adventures.page.scss'],
})
export class AdventuresPage implements OnInit {

  adventures$: Observable<IAdventure[]>;

  constructor(
    private router: Router,
    private navController: NavController,
    private adventureService: AdventureService,
  ) {
    this.adventures$ = this.adventureService.getAdventuresNearMe();
  }

  ngOnInit() {
  }

  goToActions(adventureId) {
    this.navController.navigateForward(['actions', adventureId]);
  }

  goToMap() {
    console.log('asasdas');
    this.router.navigate(['home', 'map']);
  }
}
