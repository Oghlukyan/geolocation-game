import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { mockAdventures } from '../../mock-data/mock-adventures.const';
import { IAdventure } from '../../core/interfaces/adventure.interface';
import { IGeoPoint } from '../../core/interfaces/geo-point.interface';

@Injectable({
  providedIn: 'root',
})
export class AdventureService {

  constructor() {
  }

  getAllAdventures(): Observable<IAdventure[]> {
    return of(mockAdventures);
  }

  getAdventuresNearMe(): Observable<IAdventure[]> {

    // TODO get from hardware
    const geoPoint: IGeoPoint = { latitude: 1, longitude: 1 };

    return this.getAllAdventures().pipe(
      filter(this.isPointNearMe.bind(this)),
    );
  }

  getAdventureById(id): Observable<IAdventure> {
    // TODO from BE
    return this.getAllAdventures().pipe(
      filter(res => !!res.find(it => it.id == id)),
      map(res => res[0]),
    );
  }

  // ASK should be done by server, right?
  isPointNearMe(geoPoint: IGeoPoint): boolean {
    return true;
  }
}
