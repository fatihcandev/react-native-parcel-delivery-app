import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { IParcelDetails } from 'types';

import { AppContext, SET_PARCEL_DETAILS } from 'context';
import Asset from './Asset';
import Box from './Box';
import Card from './Card';
import Icon from './Icon';
import ProgressBar from './ProgressBar';
import StyledText from './StyledText';

interface IMyParcelCardProps {
  parcelDetails: IParcelDetails;
  onDetailsPress?: () => void;
  isDetailsSheet?: boolean;
}

const MyParcelCard: React.FC<IMyParcelCardProps> = ({
  parcelDetails,
  onDetailsPress,
  isDetailsSheet = false,
}) => {
  const { dispatch } = useContext(AppContext);
  const { id, company, status, lastUpdate, progress } = parcelDetails;

  const handleDetailsPress = () => {
    dispatch({
      type: SET_PARCEL_DETAILS,
      data: {
        parcelDetails,
      },
    });
    onDetailsPress && onDetailsPress();
  };

  return (
    <Card height={174} marginBottom="m">
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginBottom="l">
        <StyledText variant="bodyPrimary">{id}</StyledText>
        <Asset name={company} width={70} height={20} />
      </Box>
      <Box marginBottom="l">
        <StyledText variant="bodyPrimaryBold" marginBottom="s">
          {status[status.length - 1].label}
        </StyledText>
        <StyledText variant="bodySecondary" color="grey" marginBottom="s">
          Last update: {lastUpdate}
        </StyledText>
        <ProgressBar {...{ progress }} />
      </Box>
      {!isDetailsSheet && (
        <TouchableOpacity onPress={handleDetailsPress}>
          <Box flexDirection="row" alignItems="center">
            <StyledText variant="link">Details</StyledText>
            <Icon name="arrowRight" color="black" width={16} height={16} />
          </Box>
        </TouchableOpacity>
      )}
    </Card>
  );
};

export default MyParcelCard;
