import React from 'react';

import { AssetName } from 'types';
import * as Brands from '@brands';
import * as Illustrations from '@illustrations';

interface IAssetProps {
  name: string;
  width?: number;
  height?: number;
}

const Asset: React.FC<IAssetProps> = ({ name, ...rest }) => {
  switch (name) {
    case AssetName.aliExpress:
      return <Brands.AliExpress {...rest} />;
    case AssetName.amazon:
      return <Brands.Amazon {...rest} />;
    case AssetName.zalando:
      return <Brands.Zalando {...rest} />;
    case AssetName.visa:
      return <Brands.Visa {...rest} />;
    case AssetName.bigBox:
      return <Illustrations.BigBox />;
    case AssetName.customParcel:
      return <Illustrations.CustomParcel />;
    case AssetName.doorDelivery:
      return <Illustrations.DoorDelivery />;
    case AssetName.envelope:
      return <Illustrations.Envelope />;
    case AssetName.parcelCenter:
      return <Illustrations.ParcelCenter />;
    case AssetName.smallBox:
      return <Illustrations.SmallBox />;
    case AssetName.mapParcelCenters:
      return <Illustrations.MapParcelCenters {...rest} />;
    case AssetName.mapRoute:
      return <Illustrations.MapRoute {...rest} />;
    default:
      return null;
  }
};

export default Asset;
