import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdventureService } from '../home/services/adventure.service';
import { takeUntil, tap } from 'rxjs/operators';
import { IAdventure } from '../core/interfaces/adventure.interface';
import { AlertController, IonSlides, NavController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit, OnDestroy {

  @ViewChild(IonSlides) slides: IonSlides;

  @Input() inProcessAdventureId: number | string;

  adventure: IAdventure;
  selectedActionIndex = 0;

  readonly slideOpts = {};

  private destroy$ = new Subject();

  constructor(
    private router: Router,
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private adventureService: AdventureService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  get adventureId() {
    console.log(this.adventureService.inProcessAdventureId);
    return this.adventureService.inProcessAdventureId;
    console.log(this.activatedRoute?.snapshot?.params?.id);
    console.log(this.inProcessAdventureId);
    return this.adventureService.inProcessAdventureId || this.activatedRoute?.snapshot?.params?.id || this.inProcessAdventureId;
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
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

  startAdventure() {
    this.adventureService.inProcessAdventureId = `${this.adventureId}`;
    this.navController.navigateForward(['home', 'in-process']);
  }

  finishAdventure() {
    this.showCongratulations();
    this.adventureService.inProcessAdventureId = null;
    this.adventure = null;
    // this.router.navigate(['home']);
  }

  async showCongratulations() {
    const alert = await this.alertController.create({
      header: 'Congratulations, you have accomplished this adventure!!!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
        },
      ],
    });

    await alert.present();
  }

  // TODO some actions can be dependent on another ones
}
