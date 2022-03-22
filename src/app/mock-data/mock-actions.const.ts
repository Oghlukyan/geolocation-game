import { IAction } from '../core/interfaces/action.interface';
import { EActionTypes } from '../core/enums/action-types.enum';

export const mockActions: IAction[] = [
  {
    type: EActionTypes.fillBlank,
    question: 'how are you?',
    imageUrls: [
      'https://www.eurodicas.com.br/wp-content/uploads/2018/11/braganca-em-portugal-1200x900.jpg',
    ],
  },
  {
    type: EActionTypes.multiChoice,
    question: 'what days of week do you like?',
    questionOptions: ['Mon', 'Tue', 'Wed'],
    imageUrls: [
      'https://cdn.visitportugal.com/sites/www.visitportugal.com/files/mediateca/AntigaSeBraganca-CMBraganca-d.jpg',
    ],
  },
  {
    type: EActionTypes.singleChoice,
    question: 'which color is your fav.?',
    questionOptions: ['purple', 'cyan', 'lime', 'orange'],
    imageUrls: [
      'https://cdn.visitportugal.com/sites/www.visitportugal.com/files/mediateca/AntigaSeBraganca-CMBraganca-d.jpg',
    ],
  },
  {
    type: EActionTypes.truth,
    question: 'are you adult?',
    imageUrls: [
      'https://www.vagamundos.pt/wp-content/uploads/2020/10/1-101.jpg',
    ],
  },
  {
    type: EActionTypes.numericRes,
    question: 'how many days do you plan to stay in this place?',
    imageUrls: [
      'https://www.climatestotravel.com/images/maps/Bragan%C3%A7a.jpg',
    ],
  },
].map(
  (it, index) => ({
    ...it,
    id: `${ index }`,
    geoPoint: { latitude: 1, longitude: 1 },
    name: `action ${index + 1}`,
    description: `description for action ${index + 1}`,
  } as IAction),
);
