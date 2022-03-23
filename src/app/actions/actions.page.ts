import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdventureService } from '../home/services/adventure.service';
import { takeUntil, tap } from 'rxjs/operators';
import { IAdventure } from '../core/interfaces/adventure.interface';
import { IonSlides } from '@ionic/angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit, OnDestroy {

  @ViewChild(IonSlides) slides: IonSlides;

  adventure: IAdventure;
  selectedActionIndex = 0;

  readonly slideOpts = {};

  private destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private adventureService: AdventureService,
  ) {
  }

  get adventureId() {
    return this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.adventureService.getAdventureById(this.adventureId).pipe(
      takeUntil(this.destroy$),
      tap(res => this.adventure = res),
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
