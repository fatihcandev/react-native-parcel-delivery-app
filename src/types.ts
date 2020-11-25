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
};

export type BottomTabRoutes = {
  MyParcels: undefined;
  SendParcel: undefined;
  ParcelCenter: undefined;
};

export type SendParcelRoutes = {
  ParcelSize: undefined;
  DeliveryMethod: undefined;
  Checkout: undefined;
};

export enum IconName {
  arrowDown = 'arrowDown',
  arrowRight = 'arrowRight',
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
