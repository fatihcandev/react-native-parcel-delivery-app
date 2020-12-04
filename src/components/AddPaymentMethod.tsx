import React, { useEffect, useState } from 'react';

import { IPaymentMethod } from 'types';
import Box from './Box';
import InputInvalidMsg from './InputInvalidMsg';
import Layout from './Layout';
import PaymentCard from './PaymentCard';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';

interface IAddPaymentMethodProps {
  onAddPaymentMethod: (paymentMethod: IPaymentMethod) => void;
}

const AddPaymentMethod: React.FC<IAddPaymentMethodProps> = ({ onAddPaymentMethod }) => {
  const [cardNo, setCardNo] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [expDate, setExpDate] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [cvcFocused, setCvcFocused] = useState<boolean>(false);
  const isCardNoValid = cardNo.length > 0 ? cardNo.length === 19 : undefined;
  const isExpDateValid =
    // eslint-disable-next-line radix
    expDate.length > 0 ? expDate.length === 5 && parseInt(expDate.split('/')[1]) > 20 : undefined;
  const isCvcValid = cvc.length > 0 ? cvc.length === 3 : undefined;
  const isNameValid = name.length > 0 ? name.length > 1 : undefined;
  const isAddButtonDisabled = [isCardNoValid, isExpDateValid, isCvcValid, isNameValid].some(
    v => !v,
  );

  useEffect(() => {
    if (expDate.length === 2) {
      setExpDate(date => `${date}/`);
    }
  }, [expDate.length]);

  useEffect(() => {
    if (cardNo.length === 4) {
      setCardNo(no => `${no} `);
    } else if (cardNo.length === 9) {
      setCardNo(no => `${no} `);
    } else if (cardNo.length === 14) {
      setCardNo(no => `${no} `);
    }
  }, [cardNo.length]);

  return (
    <Layout headingBig="Add payment method">
      <PaymentCard {...{ cardNo, name, expDate, cvc, cvcFocused }} />
      <Box marginTop="m">
        <Box marginBottom="m">
          <StyledInput
            type="default"
            label="Card number"
            value={cardNo}
            onChangeText={v => setCardNo(v)}
            keyboardType="numeric"
            placeholder="•••• •••• •••• ••••"
            maxLength={19}
          />
          {isCardNoValid !== undefined && !isCardNoValid && (
            <InputInvalidMsg>Card number is not valid!</InputInvalidMsg>
          )}
        </Box>
        <Box marginBottom="m">
          <StyledInput
            label="Name on the card"
            value={name}
            onChangeText={v => setName(v)}
            type="default"
          />
          {isNameValid !== undefined && !isNameValid && (
            <InputInvalidMsg>Name is not valid!</InputInvalidMsg>
          )}
        </Box>
        <Box flexDirection="row" justifyContent="space-between" marginBottom="m">
          <Box>
            <StyledInput
              label="Expiration date"
              value={expDate}
              onChangeText={v => setExpDate(v)}
              type="default"
              keyboardType="numeric"
              maxLength={5}
            />
            {isExpDateValid !== undefined && !isExpDateValid && (
              <InputInvalidMsg>Expiration date is not valid!</InputInvalidMsg>
            )}
          </Box>
          <Box>
            <StyledInput
              label="Security code"
              value={cvc}
              onChangeText={v => setCvc(v)}
              type="default"
              keyboardType="numeric"
              maxLength={3}
              onFocus={() => setCvcFocused(true)}
              onBlur={() => setCvcFocused(false)}
            />
            {isCvcValid !== undefined && !isCvcValid && (
              <InputInvalidMsg>Security code is not valid!</InputInvalidMsg>
            )}
          </Box>
        </Box>
        <StyledButton
          label="Add payment method"
          onPress={() => onAddPaymentMethod({ cardNo, name, expDate, cvc })}
          disabled={isAddButtonDisabled}
        />
      </Box>
    </Layout>
  );
};

export default AddPaymentMethod;
