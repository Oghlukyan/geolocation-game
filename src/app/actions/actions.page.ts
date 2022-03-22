import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdventureService } from '../home/services/adventure.service';
import { tap } from 'rxjs/operators';
import { IAdventure } from '../core/interfaces/adventure.interface';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  adventure: IAdventure;

  visibleActionIndex = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adventureService: AdventureService,
  ) {
  }

  get adventureId() {
    return this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    // TODO destroy
    this.adventureService.getAdventureById(this.adventureId).pipe(
      tap(res => this.adventure = res),
    ).subscribe();
  }

  goToAction(event) {
    this.visibleActionIndex = +event.detail.value;
  }

  // TODO no next and prev.
  // use points instead
  // swipe for next and prev.
  // some actions can be dependent on another ones
}
