import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IPaymentMethod, SendParcelRoutes, StackNavigationProps } from 'types';
import { AddPaymentMethod, CheckoutSummary, Loading } from 'components';

const Checkout = ({ navigation, route }: StackNavigationProps<SendParcelRoutes, 'Checkout'>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod>({});
  const { parcelSize, deliveryMethod, recipientInfo } = route.params;
  const { cardNo, name, cvc, expDate } = paymentMethod;

  const getPaymentMethod = useCallback(async () => {
    setLoading(true);
    try {
      const res = await AsyncStorage.getItem('paymentMethod');
      if (res !== null) {
        setPaymentMethod(JSON.parse(res));
      }
    } catch (error) {
      Alert.alert('Error', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPaymentMethod();
  }, [getPaymentMethod]);

  const handleAddPaymentMethod = async (method: IPaymentMethod) => {
    try {
      setLoading(true);
      await AsyncStorage.setItem('paymentMethod', JSON.stringify(method));
    } catch (error) {
      Alert.alert('Error', error);
    } finally {
      getPaymentMethod();
    }
  };

  const handlePayment = () => {
    Alert.alert('Success!', 'Payment has been made successfully', [
      { text: 'Go home', onPress: () => navigation.navigate('ParcelSize') },
    ]);
  };

  return loading ? (
    <Loading />
  ) : cardNo && name && cvc && expDate ? (
    <CheckoutSummary
      {...{ paymentMethod, recipientInfo, parcelSize, deliveryMethod }}
      onPayment={handlePayment}
    />
  ) : (
    <AddPaymentMethod onAddPaymentMethod={handleAddPaymentMethod} />
  );
};

export default Checkout;
