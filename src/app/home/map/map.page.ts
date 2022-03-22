import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  apiLoaded$: Observable<boolean>;
  asd: boolean

  constructor(httpClient: HttpClient) {
    // httpClient.jsonp(
    //   `https://maps.googleapis.com/maps/api/js?key=${ environment.googleMapApiKey }`,
    //   'callback',
    // ).pipe(
    //   tap(() => this.asd = true),
    //   map(() => true),
    //   catchError(() => of(false)),
    // ).subscribe();
  }

  ngOnInit() {
  }

}
