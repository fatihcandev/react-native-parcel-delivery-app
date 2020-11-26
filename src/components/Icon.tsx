import React from 'react';

import { IconName } from 'types';
import * as Icons from '@icons';

interface IIconProps {
  name: string;
  color?: string;
  width?: string | number;
  height?: string | number;
}

const Icon: React.FC<IIconProps> = ({ name, ...rest }) => {
  switch (name) {
    case IconName.arrowDown:
      return <Icons.ArrowDown {...rest} />;
    case IconName.arrowRight:
      return <Icons.ArrowRight {...rest} />;
    case IconName.close:
      return <Icons.Close {...rest} />;
    case IconName.courier:
      return <Icons.Courier {...rest} />;
    case IconName.delivery:
      return <Icons.Delivery {...rest} />;
    case IconName.myParcels:
      return <Icons.MyParcels {...rest} />;
    case IconName.parcelCenter:
      return <Icons.ParcelCenter {...rest} />;
    case IconName.pinEmpty:
      return <Icons.PinTruck {...rest} />;
    case IconName.qrCode:
      return <Icons.QrCode {...rest} />;
    case IconName.sendParcels:
      return <Icons.SendParcels {...rest} />;
    case IconName.truck:
      return <Icons.Truck {...rest} />;
    default:
      return null;
  }
};

export default Icon;
