import React from 'react';

import { IParcelCenterDetails } from 'types';
import Box from './Box';
import Card from './Card';
import ProgressBar from './ProgressBar';
import StyledText from './StyledText';

interface IParcelCenterCardProps {
  details: IParcelCenterDetails;
}

const ParcelCenterCard: React.FC<IParcelCenterCardProps> = ({ details }) => {
  const { id, availability, addressFirstLine, addressSecondLine, occupancy } = details;

  const getOccupanyText = () => {
    switch (occupancy) {
      case 100:
        return 'Fully occupied';
      case 33:
        return 'Lots of empty space';
      default:
        return '';
    }
  };

  return (
    <Card marginBottom="m">
      <Box flexDirection="row" justifyContent="space-between" marginBottom="m">
        <StyledText variant="bodyPrimary">{id}</StyledText>
        <StyledText variant="bodySecondary" color="grey">
          {availability}
        </StyledText>
      </Box>
      <Box marginBottom="xl">
        <StyledText variant="bodyPrimaryBold">{addressFirstLine} </StyledText>
        <StyledText variant="bodyPrimary">{addressSecondLine} </StyledText>
      </Box>
      <Box>
        <StyledText variant="bodyPrimary" marginBottom="s">
          {getOccupanyText()}
        </StyledText>
        <ProgressBar progress={occupancy} />
      </Box>
    </Card>
  );
};

export default ParcelCenterCard;
