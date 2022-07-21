import { IAction } from '../core/interfaces/action.interface';
import { EActionTypes } from '../core/enums/action-types.enum';

export const mockActions: IAction[] = [
  {
    type: EActionTypes.fillBlank,
    question: 'How many stairs does the pillory have?',
    imageUrls: [
      'https://cms.infoportugal.info/media/fotos/final/Braganca/BRG6626.jpg',
    ],
    description: 'The Pillory of Bragança is a 15th-century sculpted stone column with symbolic political, administrative and judicial significance, erected over a four-step octagonal platform, located in the civil parish of Sé, Santa Maria e Meixedo, municipality of Bragança.',
    name: 'Pelourinho',
    geoPoint: { latitude: 41.80418440364894, longitude: -6.749678993860823 }
  },
  {
    type: EActionTypes.multiChoice,
    question: 'what days of week do you like?',
    questionOptions: ['Mon', 'Tue', 'Wed'],
    imageUrls: [
      'https://cdn.visitportugal.com/sites/www.visitportugal.com/files/mediateca/AntigaSeBraganca-CMBraganca-d.jpg',
    ],
    geoPoint: { latitude: 41.80596547631, longitude: -6.756736633153294 }
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
    geoPoint: it.geoPoint || { latitude: 1, longitude: 1 },
    name: it.name || `action ${index + 1}`,
    description: it.description || `description for action ${index + 1}`,
  } as IAction),
);
