import React, { useContext, useEffect, useState } from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

import { validatePhoneNumber } from 'utils';
import { Asset, Box, Icon, StyledButton, StyledText } from 'components';
import theme from 'theme';
import { AuthRoutes, StackNavigationProps } from 'types';
import { AppContext, VERIFY_PHONE_NUMBER } from 'context';

const Login = ({ navigation }: StackNavigationProps<AuthRoutes, 'Login'>) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const { dispatch } = useContext(AppContext);

  const handleSendCode = async () => {
    setLoading(true);
    if (isValid) {
      try {
        const confirmationResult = await auth().signInWithPhoneNumber(phoneNumber);
        if (confirmationResult) {
          setLoading(false);
          dispatch({
            type: VERIFY_PHONE_NUMBER,
            data: {
              phoneNumber,
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
              editable={!loading}
              maxLength={14}
              style={[
                styles.input,
                {
                  color: isValid === undefined || isValid ? theme.colors.black : theme.colors.red,
                  borderBottomColor: isValid === undefined || isValid ? 'grey' : theme.colors.red,
                },
              ]}
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={v => setPhoneNumber(v)}
              placeholder="Enter your phone number"
            />
            {!(isValid === undefined) && isValid && (
              <Box position="absolute" right={0} bottom={20}>
                <Icon name="check" color="green" />
              </Box>
            )}
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
          disabled={loading || !isValid}
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
    textAlign: 'center',
  },
});

export default Login;
