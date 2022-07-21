import { IAbstractDetails } from './abstract-details.interface';
import { IAction } from './action.interface';
import { IGeoPoint } from './geo-point.interface';

export interface IAdventure extends IAbstractDetails {
  id: string;
  actions: IAction[];
  area: { geoPoint: IGeoPoint; radius: number };
  downloaded: boolean;
}
