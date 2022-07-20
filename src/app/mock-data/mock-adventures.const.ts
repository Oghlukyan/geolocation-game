import { IAdventure } from '../core/interfaces/adventure.interface';
import { mockActions } from './mock-actions.const';

export const mockAdventures: IAdventure[] = [
  {
    imageUrls: [
      'https://cdn.visitportugal.com/sites/www.visitportugal.com/files/mediateca/CidadelaBraganca_TurismoPortoNorte-d.jpg',
    ],
    actions: mockActions,
    name: 'Braganca',
    description: 'Visit the historical and cultural parts of Braganca',
  },
  {
    imageUrls: [
      'https://www.brunswickgroup.com/media/8384/lisbon.jpg',
    ],
    actions: mockActions,
    name: 'Lisbon',
    description: 'Explore Lisbon\s attractive places',
  },
].map(
  (it, index) => ({
    ...it,
    id: `${ index }`,
    area: { geoPoint: { latitude: 1, longitude: 1 }, radius: 1 },
  } as IAdventure),
);
