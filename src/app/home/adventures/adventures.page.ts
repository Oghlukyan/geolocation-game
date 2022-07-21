import { Component, OnInit } from '@angular/core';
import { AdventureService } from '../services/adventure.service';
import { NavController } from '@ionic/angular';
import { IAdventure } from '../../core/interfaces/adventure.interface';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.page.html',
  styleUrls: ['./adventures.page.scss'],
})
export class AdventuresPage implements OnInit {

  adventures: IAdventure[];
  visibleAdventures: IAdventure[];

  searchText = '';

  constructor(
    private router: Router,
    private navController: NavController,
    private adventureService: AdventureService,
  ) {
    this.adventureService.getAdventuresNearMe().pipe(
      tap(res => this.adventures = res),
      tap(_ => this.visibleAdventures = this.adventures),
    ).subscribe();
  }

  ngOnInit() {
  }

  goToActions(adventureId) {
    this.adventureService.inProcessAdventureId = adventureId;
    this.navController.navigateForward(['home', 'in-process']);
  }

  goToMap() {
    console.log('asasdas');
    this.router.navigate(['home', 'map']);
  }

  filter(event) {
    this.visibleAdventures = this.adventures.filter(it => it.name.trim().toLowerCase().includes(event.detail.value.trim().toLowerCase()));
  }
}
