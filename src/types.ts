import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type RootStack = {
  Root: undefined;
  Camera: undefined;
};

export type BottomTabRoutes = {
  MyParcels: undefined;
  SendParcel: undefined;
  ParcelCenter: undefined;
  Gallery: undefined;
};

export type SendParcelRoutes = {
  ParcelSize: undefined;
  DeliveryMethod: undefined;
  Checkout: undefined;
};

export type GalleryRoutes = {
  Gallery: undefined;
  CloudGallery: undefined;
};

export interface IParcelStatus {
  icon: string;
  label: string;
  date: string;
}

export interface IParcelDetails {
  id: string;
  company: string;
  status: IParcelStatus[];
  lastUpdate: string;
  progress: number;
}

export interface IPicture {
  fileName: string;
  uri: string;
}

export enum IconName {
  arrowDown = 'arrowDown',
  arrowRight = 'arrowRight',
  arrowLeft = 'arrowLeft',
  close = 'close',
  courier = 'courier',
  delivery = 'delivery',
  myParcels = 'myParcels',
  parcelCenter = 'parcelCenter',
  pinEmpty = 'pinEmpty',
  pinTruck = 'pinTruck',
  qrCode = 'qrCode',
  sendParcels = 'sendParcels',
  truck = 'truck',
  turn = 'turn',
  camera = 'camera',
  videoCamera = 'videoCamera',
  gallery = 'gallery',
  upload = 'upload',
  check = 'check',
  trash = 'trash',
}

export enum AssetName {
  aliExpress = 'aliExpress',
  amazon = 'amazon',
  zalando = 'zalando',
  visa = 'visa',
  bigBox = 'bigBox',
  customParcel = 'customParcel',
  doorDelivery = 'doorDelivery',
  envelope = 'envelope',
  parcelCenter = 'parcelCenter',
  smallBox = 'smallBox',
  mapParcelCenters = 'mapParcelCenters',
  mapRoute = 'mapRoute',
}
