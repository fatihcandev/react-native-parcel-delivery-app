import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { CallingCodePicker } from '@digieggs/rn-country-code-picker';

import { Theme } from 'theme';
import { AppContext, VERIFY_PHONE_NUMBER } from 'context';
import { validatePhoneNumber } from 'utils';
import { AuthRoutes, StackNavigationProps } from 'types';
import { Asset, Box, Icon, StyledButton, StyledText } from 'components';

const Login = ({ navigation }: StackNavigationProps<AuthRoutes, 'Login'>) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCallingCode, setSelectedCallingCode] = useState<string>('90');
  const { dispatch } = useContext(AppContext);
  const theme = useTheme<Theme>();
  const isValid = phoneNumber.length > 0 ? validatePhoneNumber(phoneNumber) : undefined;
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
              selectedValue={selectedCallingCode}
              onValueChange={v => setSelectedCallingCode(v)}
              togglerContainerStyle={styles.callingCodeToggler}
              pickerItemLabelStyle={styles.callingCodePickerFont}
              togglerLabelStyle={styles.callingCodePickerFont}
              searchInputStyle={styles.callingCodePickerFont}
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
          disabled={isButtonDisabled}
          {...{ loading }}
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
    paddingLeft: 120,
  },
  callingCodeToggler: {
    position: 'absolute',
    left: 0,
    bottom: 20,
  },
  callingCodePickerFont: {
    fontFamily: 'Poppins-Medium',
  },
});

export default Login;
