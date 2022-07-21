import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { mockAdventures } from '../../mock-data/mock-adventures.const';
import { IAdventure } from '../../core/interfaces/adventure.interface';
import { IGeoPoint } from '../../core/interfaces/geo-point.interface';

@Injectable({
  providedIn: 'root',
})
export class AdventureService {

  inProcessAdventureId: string;

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
      tap(res => console.log(res)), // getting by index, change to id
      tap(res => console.log(res[id])), // getting by index, change to id
      map(res => res[id]), // getting by index, change to id
    );
    // return this.getAllAdventures().pipe(
    //   filter(res => !!res.filter(it => it.id == id)),
    //   tap(res => console.log(res)),
    //   map(res => res[0]),
    // );
  }

  // ASK should be done by server, right?
  isPointNearMe(geoPoint: IGeoPoint): boolean {
    return true;
  }
}
