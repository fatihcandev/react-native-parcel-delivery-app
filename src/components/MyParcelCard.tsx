import React from 'react';

import Card from './Card';
import Box from './Box';
import StyledText from './StyledText';

interface IMyParcelCardProps {
  id: string;
}

const MyParcelCard: React.FC<IMyParcelCardProps> = ({ id }) => {
  return (
    <Card height={174}>
      <Box flexDirection="row">
        <StyledText variant="bodyPrimary">{id}</StyledText>
      </Box>
    </Card>
  );
};

export default MyParcelCard;
