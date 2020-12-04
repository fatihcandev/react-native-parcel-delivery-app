import React, { useState } from 'react';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';
import { SendParcelRoutes, StackNavigationProps } from 'types';
import {
  Layout,
  ParcelDeliveryMethodCard,
  StyledButton,
  StyledInput,
  StyledText,
} from 'components';

const DeliveryMethod = ({
  navigation,
  route,
}: StackNavigationProps<SendParcelRoutes, 'DeliveryMethod'>) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [deliveryMethod, setDeliveryMethod] = useState<string>('');
  const theme = useTheme<Theme>();
  const { parcelSize } = route.params;

  const getDeliveryMethod = () => {
    switch (deliveryMethod) {
      case 'doorToParcelCenter':
        return 'From door to parcel center';
      case 'doorToDoor':
        return 'From door to door';
      default:
        return '';
    }
  };

  const handleContinuePress = () => {
    navigation.navigate('Checkout', {
      parcelSize,
      deliveryMethod: getDeliveryMethod(),
      recipientInfo: {
        recipientName: name,
        email,
        phoneNumber,
        address,
      },
    });
  };

  const isContinueButtonDisabled =
    [name, email, phoneNumber, address].some(field => field.length === 0) || !deliveryMethod;

  return (
    <Layout headingSmall="Delivery method">
      <ParcelDeliveryMethodCard
        method="doorToParcelCenter"
        onPress={v => setDeliveryMethod(v)}
        isSelected={deliveryMethod === 'doorToParcelCenter'}
      />
      <ParcelDeliveryMethodCard
        method="doorToDoor"
        onPress={v => setDeliveryMethod(v)}
        isSelected={deliveryMethod === 'doorToDoor'}
      />
      <StyledText variant="bodyPrimary" marginBottom="s">
        Recipient info
      </StyledText>
      <StyledInput
        label="Name"
        value={name}
        onChangeText={v => setName(v)}
        type="default"
        style={{ marginBottom: theme.spacing.m }}
      />
      <StyledInput
        label="Email"
        value={email}
        onChangeText={v => setEmail(v)}
        type="default"
        style={{ marginBottom: theme.spacing.m }}
      />
      <StyledInput
        label="Phone number"
        value={phoneNumber}
        onChangeText={v => setPhoneNumber(v)}
        type="default"
        keyboardType="phone-pad"
        maxLength={13}
        style={{ marginBottom: theme.spacing.m }}
      />
      <StyledInput
        label="Address"
        value={address}
        onChangeText={v => setAddress(v)}
        type="default"
        style={{ marginBottom: theme.spacing.m }}
      />
      <StyledButton
        label="Continue"
        onPress={handleContinuePress}
        disabled={isContinueButtonDisabled}
      />
    </Layout>
  );
};

export default DeliveryMethod;
