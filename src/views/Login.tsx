import React, { useContext, useEffect, useState } from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

import theme from 'theme';
import { AppContext, VERIFY_PHONE_NUMBER } from 'context';
import { validatePhoneNumber } from 'utils';
import { AuthRoutes, StackNavigationProps } from 'types';
import { countries } from 'data';
import { Asset, Box, Icon, StyledButton, StyledText, CallingCodePicker } from 'components';

const Login = ({ navigation }: StackNavigationProps<AuthRoutes, 'Login'>) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const [isPhoneInputFocused, setIsPhoneInputFocused] = useState<boolean>(false);
  const [selectedCallingCode, setSelectedCallingCode] = useState<string>('');
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('');
  const { dispatch } = useContext(AppContext);
  let isButtonDisabled = loading || !isValid || !selectedCallingCode;
  let phoneNumberWithCode = `+${selectedCallingCode}`.concat(phoneNumber);

  const handleSendCode = async () => {
    setLoading(true);
    if (isValid) {
      try {
        const confirmationResult = await auth().signInWithPhoneNumber(phoneNumberWithCode);
        if (confirmationResult) {
          setLoading(false);
          dispatch({
            type: VERIFY_PHONE_NUMBER,
            data: {
              phoneNumber: phoneNumberWithCode,
              confirmationResult,
            },
          });
          navigation.navigate('LoginVerifyCode');
        }
      } catch (error) {
        Alert.alert('Error', error.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (phoneNumber.length > 0) {
      setIsValid(validatePhoneNumber(phoneNumber));
    } else {
      setIsValid(undefined);
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (countries) {
      setSelectedCallingCode(countries[0].callingCodes[0]);
    }
  }, []);

  useEffect(() => {
    if (selectedCallingCode) {
      const selectedCountry = countries.find(
        country => country.callingCodes[0] === selectedCallingCode,
      );
      setSelectedCountryCode(selectedCountry?.alpha2Code?.toLowerCase()!);
    }
  }, [selectedCallingCode]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} justifyContent="center" paddingHorizontal="l" paddingVertical="xl">
        <Box flexDirection="row" justifyContent="center" marginBottom="m">
          <Asset name="phone" width={150} height={150} />
        </Box>
        <StyledText variant="h3" textAlign="center" marginBottom="m">
          You'll receive a 6 digit code to verify
        </StyledText>
        <Box marginBottom="m">
          <Box position="relative">
            <TextInput
              onFocus={() => setIsPhoneInputFocused(true)}
              onBlur={() => setIsPhoneInputFocused(false)}
              textAlignVertical="bottom"
              editable={!loading}
              maxLength={10}
              style={[
                styles.input,
                {
                  color: isValid === undefined || isValid ? theme.colors.black : theme.colors.red,
                  borderBottomColor: isValid === undefined || isValid ? 'grey' : theme.colors.red,
                },
              ]}
              textContentType="telephoneNumber"
              keyboardType="number-pad"
              value={phoneNumber}
              onChangeText={v => setPhoneNumber(v)}
              placeholder="578 692 12 23"
            />
            {!(isValid === undefined) && isValid && (
              <Box position="absolute" right={0} bottom={20}>
                <Icon name="check" color="green" />
              </Box>
            )}
            <CallingCodePicker
              {...{ selectedCallingCode, selectedCountryCode, isPhoneInputFocused }}
              onChange={v => setSelectedCallingCode(v)}
            />
          </Box>
          {!(isValid === undefined) && !isValid && (
            <StyledText variant="bodyPrimary" color="red">
              Please enter a valid phone number
            </StyledText>
          )}
        </Box>
        <StyledButton
          label="Continue"
          onPress={handleSendCode}
          {...{ loading }}
          disabled={isButtonDisabled}
        />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    borderBottomWidth: 1,
    paddingLeft: 110,
  },
});

export default Login;
