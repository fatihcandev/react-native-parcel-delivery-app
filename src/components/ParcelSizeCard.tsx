import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Asset from './Asset';
import Box from './Box';
import Card from './Card';
import StyledText from './StyledText';

interface IParcelSizeCardProps {
  size: 'small' | 'medium' | 'large' | 'custom';
  onPress: () => void;
}

const ParcelSizeCard: React.FC<IParcelSizeCardProps> = ({ size, onPress }) => {
  const getAsset = () => {
    switch (size) {
      case 'small':
        return 'envelope';
      case 'medium':
        return 'smallBox';
      case 'large':
        return 'bigBox';
      case 'custom':
        return 'customParcel';
      default:
        return '';
    }
  };

  const getWeight = () => {
    switch (size) {
      case 'small':
        return 'Max. 25 kg, 8 x 38 x 64 cm';
      case 'medium':
        return 'Max. 25 kg, 19 x 38 x 64 cm';
      case 'large':
        return 'Max. 25 kg, 41 x 38 x 64 cm';
      case 'custom':
        return 'Max: 30 kg or 300 cm';
      default:
        return '';
    }
  };

  const getDescription = () => {
    switch (size) {
      case 'small':
        return 'Fits in an envelope';
      case 'medium':
        return 'Fits in a shoe box';
      case 'large':
        return 'Fits in a cardboard box';
      case 'custom':
        return 'Fits on a skid';
      default:
        return '';
    }
  };

  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Card height={115} marginBottom="m">
        <Box flexDirection="row">
          <Box marginRight="xl" justifyContent="center">
            <Asset name={getAsset()} width={65} height={33} />
          </Box>
          <Box>
            <StyledText variant="bodyPrimaryBold" marginBottom="s">
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </StyledText>
            <StyledText variant="bodyPrimary" marginBottom="m">
              {getWeight()}
            </StyledText>
            <StyledText variant="bodySecondary" color="grey">
              {getDescription()}
            </StyledText>
          </Box>
        </Box>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default ParcelSizeCard;
