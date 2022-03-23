import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdventureService } from '../home/services/adventure.service';
import { tap } from 'rxjs/operators';
import { IAdventure } from '../core/interfaces/adventure.interface';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  adventure: IAdventure;
  selectedActionIndex = 0;

  readonly slideOpts = {};

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

  async handleSlideChange(event) {
    const index = await this.slides.getActiveIndex();
    this.selectedActionIndex = index;
  }

  handleSegmentChange(event) {
    const index = +event.detail.value;
    this.slides.slideTo(index);
  }

  // TODO some actions can be dependent on another ones
}
