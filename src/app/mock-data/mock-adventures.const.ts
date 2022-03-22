import { IAdventure } from '../core/interfaces/adventure.interface';
import { mockActions } from './mock-actions.const';

export const mockAdventures: IAdventure[] = [
  {
    imageUrls: [
      'https://cdn.visitportugal.com/sites/www.visitportugal.com/files/mediateca/CidadelaBraganca_TurismoPortoNorte-d.jpg',
    ],
    actions: mockActions,
  },
  {
    imageUrls: [
      'https://s2.glbimg.com/YPvpv7j-Rve_etlQcfT23B1J84U=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/g/8/5LwUecQPShdQRoqIC2KQ/lago-do-taboao-braganca-paulista-secom.jpg',
    ],
    actions: mockActions,
  },
].map(
  (it, index) => ({
    ...it,
    id: `${ index }`,
    area: { geoPoint: { latitude: 1, longitude: 1 }, radius: 1 },
    name: `adventure ${index + 1}`,
    description: `description for adv. ${index + 1}`,
  } as IAdventure),
);
