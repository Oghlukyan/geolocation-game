import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-only-map',
  templateUrl: './only-map.component.html',
  styleUrls: ['./only-map.component.scss'],
  providers: [Geolocation]
})
export class OnlyMapComponent implements OnInit, AfterViewInit {

  @ViewChild(GoogleMap) map: GoogleMap;

  @Input() markers: {position: {lat: any, lng: any}}[];

  constructor(
    private geolocation: Geolocation,
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.asd();
    console.log(this.map);
    console.log(this.map.googleMap);

    this.map.googleMap.setCenter({ lat: 41.80535760284031, lng: -6.766691255127302 });
    this.map.googleMap.setZoom(15);

    this.fitMarkersInScreen();
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

  private fitMarkersInScreen() {
    const bounds = new google.maps.LatLngBounds();
    this.markers.forEach(marker => {
      bounds.extend(new google.maps.LatLng({
        lat: marker.position.lat,
        lng: marker.position.lng,
      }));
    });
    this.map.fitBounds(bounds);
  }

}
