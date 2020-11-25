import React from 'react';

import { AssetName } from 'types';
import * as Brands from '@brands/';
import * as Illustrations from '@illustrations/';

interface IAssetProps {
  name: string;
  width?: string | number;
  height?: string | number;
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
      return <Illustrations.BigBox {...rest} />;
    case AssetName.customParcel:
      return <Illustrations.CustomParcel {...rest} />;
    case AssetName.doorDelivery:
      return <Illustrations.DoorDelivery {...rest} />;
    case AssetName.envelope:
      return <Illustrations.Envelope {...rest} />;
    case AssetName.parcelCenter:
      return <Illustrations.ParcelCenter {...rest} />;
    case AssetName.smallBox:
      return <Illustrations.SmallBox {...rest} />;
    case AssetName.mapParcelCenters:
      return <Illustrations.MapParcelCenters {...rest} />;
    case AssetName.mapRoute:
      return <Illustrations.MapRoute {...rest} />;
    default:
      return null;
  }
};

export default Asset;
