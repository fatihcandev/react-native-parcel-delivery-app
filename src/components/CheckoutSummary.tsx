import React from 'react';

import { IPaymentMethod, IRecipientInfo } from 'types';
import Layout from './Layout';
import PaymentCard from './PaymentCard';
import StyledButton from './StyledButton';
import StyledText from './StyledText';

interface ICheckoutSummaryProps {
  paymentMethod: IPaymentMethod;
  recipientInfo: IRecipientInfo;
  parcelSize: string;
  deliveryMethod: string;
  onPayment: () => void;
}

const CheckoutSummary: React.FC<ICheckoutSummaryProps> = ({
  paymentMethod,
  recipientInfo,
  parcelSize,
  deliveryMethod,
  onPayment,
}) => {
  const { cardNo, name, cvc, expDate } = paymentMethod;
  const { recipientName, email, phoneNumber, address } = recipientInfo;

  return (
    <Layout headingBig="Checkout">
      <PaymentCard {...{ cardNo, name, cvc, expDate }} />
      <StyledText variant="h3" marginBottom="l" marginTop="xl">
        Summary
      </StyledText>
      <StyledText variant="bodyPrimaryBold">Recipient</StyledText>
      <StyledText variant="bodyPrimary">{recipientName} </StyledText>
      <StyledText variant="bodyPrimary">{email} </StyledText>
      <StyledText variant="bodyPrimary">{phoneNumber} </StyledText>
      <StyledText variant="bodyPrimary">{address} </StyledText>
      <StyledText variant="bodyPrimaryBold" marginTop="m">
        Parcel Size
      </StyledText>
      <StyledText variant="bodyPrimary">{parcelSize} </StyledText>
      <StyledText variant="bodyPrimaryBold" marginTop="m">
        Delivery Method
      </StyledText>
      <StyledText variant="bodyPrimary" marginBottom="xl">
        {deliveryMethod}{' '}
      </StyledText>
      <StyledButton label="Pay £3,08" onPress={onPayment} />
    </Layout>
  );
};

export default CheckoutSummary;
