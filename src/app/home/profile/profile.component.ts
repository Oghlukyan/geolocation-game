import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdventure } from '../../core/interfaces/adventure.interface';
import { AdventureService } from '../services/adventure.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  adventures$: Observable<IAdventure[]>;

  constructor(
    private adventureService: AdventureService,
  ) {
    this.adventures$ = this.adventureService.getAdventuresNearMe();
  }

  ngOnInit() {
  }
}
