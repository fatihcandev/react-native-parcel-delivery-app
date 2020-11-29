import React from 'react';

import Box from './Box';
import Icon from './Icon';
import StyledText from './StyledText';

interface IParcelStatusStepProps {
  icon: string;
  label: string;
  date: string;
  last: boolean;
}

const ParcelStatusStep: React.FC<IParcelStatusStepProps> = ({ icon, label, date, last }) => {
  return (
    <Box height={44} flexDirection="row" alignItems="center" marginBottom={last ? undefined : 'l'}>
      <Box position="relative">
        <Box
          width={44}
          height={44}
          marginRight="m"
          backgroundColor="yellowDark"
          justifyContent="center"
          alignItems="center"
          borderRadius="parcelStep">
          <Icon name={icon} color="white" />
        </Box>
        {!last && (
          <Box width={44} height={24} alignItems="center" position="absolute" bottom={-24}>
            <Box width={1} height={24} backgroundColor="yellowDark" />
          </Box>
        )}
      </Box>
      <Box>
        <StyledText variant="bodySecondary">{label}</StyledText>
        <StyledText variant="bodySecondary" color="grey">
          {date}
        </StyledText>
      </Box>
    </Box>
  );
};

export default ParcelStatusStep;
