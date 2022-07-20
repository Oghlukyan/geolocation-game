import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleMap } from '@angular/google-maps';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

// const {Geolocation} = Plugins;

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
      color: 'orange',
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
        color: 'orange',
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
