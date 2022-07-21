import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdventure } from '../../core/interfaces/adventure.interface';
import { AdventureService } from '../services/adventure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  adventures$: Observable<IAdventure[]>;

  constructor(
    private router: Router,
    private adventureService: AdventureService,
  ) {
    this.adventures$ = this.adventureService.getAdventuresNearMe();
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['login']);
  }

  goToMap() {
    this.router.navigate(['home', 'map']);
  }
}
