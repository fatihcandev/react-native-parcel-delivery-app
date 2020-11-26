import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Card, Box, StyledText, ProgressBar, Asset, Icon } from 'components';
interface IMyParcelCardProps {
  id: string;
  company: string;
  status: string;
  lastUpdate: string;
  progress: number;
}

const MyParcelCard: React.FC<IMyParcelCardProps> = ({
  id,
  company,
  status,
  lastUpdate,
  progress,
}) => {
  return (
    <Card height={174} marginBottom="m">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="l">
        <StyledText variant="bodyPrimary">{id}</StyledText>
        <Asset name={company} width={70} height={20} />
      </Box>
      <Box marginBottom="l">
        <StyledText variant="bodyPrimaryBold" marginBottom="s">
          {status}
        </StyledText>
        <StyledText variant="bodySecondary" color="grey" marginBottom="s">
          Last update: {lastUpdate}
        </StyledText>
        <ProgressBar {...{ progress }} />
      </Box>
      <TouchableWithoutFeedback>
        <Box flexDirection="row" alignItems="center">
          <StyledText variant="link">Details</StyledText>
          <Icon name="arrowRight" color="black" width={16} height={16} />
        </Box>
      </TouchableWithoutFeedback>
    </Card>
  );
};

export default MyParcelCard;
