import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import Asset from './Asset';
import Box from './Box';
import Card from './Card';
import StyledText from './StyledText';

interface IParcelDeliveryMethodCardProps {
  method: 'doorToParcelCenter' | 'doorToDoor';
  onPress: (method: string) => void;
  isSelected: boolean;
}

const ParcelDeliveryMethodCard: React.FC<IParcelDeliveryMethodCardProps> = ({
  method,
  onPress,
  isSelected,
}) => {
  const getAsset = () => {
    switch (method) {
      case 'doorToParcelCenter':
        return 'parcelCenter';
      case 'doorToDoor':
        return 'doorDelivery';
      default:
        return '';
    }
  };

  const getTitle = () => {
    switch (method) {
      case 'doorToParcelCenter':
        return 'From door to parcel center';
      case 'doorToDoor':
        return 'From door to door';
      default:
        return '';
    }
  };

  const getDeliveryTime = () => {
    switch (method) {
      case 'doorToParcelCenter':
        return '1-2 days';
      case 'doorToDoor':
        return '2-3 days';
      default:
        return '';
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => onPress(method)}>
      <Card
        height={115}
        marginBottom="m"
        borderColor={isSelected ? 'yellow' : 'greyLight'}
        borderWidth={isSelected ? 2 : 1}
      >
        <Box flexDirection="row">
          <Box marginRight="xl" justifyContent="center">
            <Asset name={getAsset()} width={65} height={33} />
          </Box>
          <Box>
            <StyledText variant="bodyPrimaryBold" marginBottom="s">
              {getTitle()}
            </StyledText>
            <StyledText variant="bodySecondary" color="grey">
              {getDeliveryTime()}
            </StyledText>
          </Box>
        </Box>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default ParcelDeliveryMethodCard;
