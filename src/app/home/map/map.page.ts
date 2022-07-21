import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  readonly markers = [{
      position: {
        lat: 41.800007,
        lng: -6.762593,
      },
      label: {
        color: 'purple',
        text: 'Visit the historical parts of Braganca',
      },
      options: { animation: google.maps.Animation.DROP },
    },
    {
      position: {
        lat: 38.716309,
        lng: -9.130014,
      },
      label: {
        color: 'purple',
        text: 'Explore Lisbon\'s attractive parts',
      },
      options: { animation: google.maps.Animation.DROP },
    }];

  apiLoaded$: Observable<boolean>;

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
