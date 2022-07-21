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
    console.log(this.map);
    console.log(this.map.googleMap);

    this.map.googleMap.setCenter({ lat: 41.80535760284031, lng: -6.766691255127302 });
    this.map.googleMap.setZoom(15);

    this.fitMarkersInScreen();
  }

  async findAndShowRoute(destLat, destLng) {
    const position = await this.geolocation.getCurrentPosition();

    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();

    directionsRenderer.setMap(this.map.googleMap);
    directionsRenderer.setOptions( { suppressMarkers: true } );

    const request: google.maps.DirectionsRequest = {
      origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      destination: new google.maps.LatLng(destLat, destLng),
      travelMode: google.maps.TravelMode.WALKING,
    };
    directionsService.route(request).then(response => {
      directionsRenderer.setDirections(response);
    }).catch(error => {
      console.log('direction error', error);
      window.alert(`Direction request failed due to ${error}`);
    });

    this.markers.push({
      position: { lat: destLat, lng: destLng },
    });
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
