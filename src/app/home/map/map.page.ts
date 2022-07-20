import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Plugins} from '@capacitor/core';
import { GoogleMap } from '@angular/google-maps';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

// const {Geolocation} = Plugins;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  providers: [Geolocation]
})
export class MapPage implements OnInit, AfterViewInit {

  @ViewChild(GoogleMap) map: GoogleMap;

  apiLoaded$: Observable<boolean>;

  constructor(
    httpClient: HttpClient,
    private geolocation: Geolocation,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.asd();
    console.log(this.map);
    console.log(this.map.googleMap);

    this.map.googleMap.setCenter({ lat: 41.80535760284031, lng: -6.766691255127302 });
    this.map.googleMap.setZoom(15);

  }

  private async asd() {
    // error on browser
    const position = await this.geolocation.getCurrentPosition();
    console.log(position);
    console.log(position.coords);



    const request = {
      location: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
      rankBy: google.maps.places.RankBy.DISTANCE,
      types: ['bar', 'cafe', 'food', 'liquor_store', 'lodging', 'meal_delivery', 'meal_takeaway', 'night_club', 'restaurant'],
      keyword: ['bar', 'pub']
    };
    const directionsService = new google.maps.DirectionsService();


    // directionsService.route(request, )

  }
}
