import { IAbstractDetails } from './abstract-details.interface';
import { IGeoPoint } from './geo-point.interface';
import { EActionTypes } from '../enums/action-types.enum';

export interface IAction extends IAbstractDetails {
  id: string;
  geoPoint: IGeoPoint;
  type: EActionTypes;
  question: string;
  questionOptions?: string[];
  prerequisiteActionIds: string[];
}
