import { IParcelDetails } from 'types';

export default [
  {
    id: '00359007738060313786',
    company: 'amazon',
    status: [
      {
        icon: 'sendParcels',
        label: 'Parcel prepared - not yet handed over to the courier.',
        date: '20.08.2020 - 18:48',
      },
      {
        icon: 'courier',
        label: 'Parcel handed over to the courier.',
        date: '21.08.2020 - 8:23',
      },
      {
        icon: 'truck',
        label: 'Parcel in transit',
        date: '21.08.2020 - 16:10',
      },
    ],
    lastUpdate: '3 hours ago',
    progress: 66,
  },
  {
    id: '00806031378690077312',
    company: 'aliExpress',
    status: [
      {
        icon: 'sendParcels',
        label: 'Parcel prepared - not yet handed over to the courier.',
        date: '20.08.2020 - 18:48',
      },
      {
        icon: 'courier',
        label: 'Parcel handed over to the courier.',
        date: '21.08.2020 - 8:23',
      },
    ],
    lastUpdate: '21 hours ago',
    progress: 33,
  },
  {
    id: '00690077312806031378',
    company: 'zalando',
    status: [
      {
        icon: 'sendParcels',
        label: 'Parcel prepared - not yet handed over to the courier.',
        date: '20.08.2020 - 18:48',
      },
      {
        icon: 'courier',
        label: 'Parcel handed over to the courier.',
        date: '21.08.2020 - 8:23',
      },
      {
        icon: 'truck',
        label: 'Parcel in transit',
        date: '21.08.2020 - 16:10',
      },
      {
        icon: 'pinTruck',
        label: 'Parcel is on distribution',
        date: '22.08.2020 - 09:10',
      },
      {
        icon: 'delivery',
        label: 'Parcel delivered',
        date: '22.08.2020 - 15:10',
      },
    ],
    lastUpdate: '2 days ago',
    progress: 100,
  },
] as IParcelDetails[];
