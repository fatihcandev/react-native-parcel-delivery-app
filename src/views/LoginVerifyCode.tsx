import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  Alert,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

import { AppContext, VERIFY_PHONE_NUMBER } from 'context';
import { Box, Loading, StyledText } from 'components';

const LoginVerifyCode = () => {
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { state, dispatch } = useContext(AppContext);
  const { phoneNumber, confirmationResult } = state;

  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);
  const input5 = useRef<TextInput>(null);
  const input6 = useRef<TextInput>(null);
  const input1Current = input1.current;
  const input2Current = input2.current;
  const input3Current = input3.current;
  const input4Current = input4.current;
  const input5Current = input5.current;
  const input6Current = input6.current;

  const handleVerifyCode = useCallback(async () => {
    setLoading(true);
    try {
      await confirmationResult?.confirm(code);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
      setCode('');
    }
  }, [code, confirmationResult]);

  useEffect(() => {
    if (code.length === 1) {
      input1Current?.blur();
      input2Current?.focus();
    }
    if (code.length === 2) {
      input2Current?.blur();
      input3Current?.focus();
    }
    if (code.length === 3) {
      input3Current?.blur();
      input4Current?.focus();
    }
    if (code.length === 4) {
      input4Current?.blur();
      input5Current?.focus();
    }
    if (code.length === 5) {
      input5Current?.blur();
      input6Current?.focus();
    }
    if (code.length === 6) {
      input6Current?.blur();
      handleVerifyCode();
    }
  }, [
    code.length,
    handleVerifyCode,
    input1Current,
    input2Current,
    input3Current,
    input4Current,
    input5Current,
    input6Current,
  ]);

  const handleRequestNewCode = async () => {
    setLoading(true);
    try {
      const confirmationResultNew = await auth().signInWithPhoneNumber(phoneNumber!, true);
      if (confirmationResultNew) {
        dispatch({
          type: VERIFY_PHONE_NUMBER,
          data: {
            confirmationResult: confirmationResultNew,
          },
        });
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFocusChange = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    let isBackspacePressed = event.nativeEvent.key === 'Backspace';

    if (input6Current?.isFocused() && isBackspacePressed) {
      setCode(c => c.substring(0, 5));
      input6Current?.blur();
      input5Current?.focus();
    }
    if (input5Current?.isFocused() && isBackspacePressed) {
      setCode(c => c.substring(0, 4));
      input5Current?.blur();
      input4Current?.focus();
    }
    if (input4Current?.isFocused() && isBackspacePressed) {
      setCode(c => c.substring(0, 3));
      input4Current?.blur();
      input3Current?.focus();
    }
    if (input3Current?.isFocused() && isBackspacePressed) {
      setCode(c => c.substring(0, 2));
      input3Current?.blur();
      input2Current?.focus();
    }
    if (input2Current?.isFocused() && isBackspacePressed) {
      setCode(c => c.substring(0, 1));
      input2Current?.blur();
      input1Current?.focus();
    }
    if (input1Current?.isFocused() && isBackspacePressed) {
      setCode(c => c.substring(0, 0));
      input1Current?.blur();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} paddingHorizontal="l" paddingVertical="xl">
        <Box flex={1} justifyContent="center">
          <StyledText variant="h2" textAlign="center" marginBottom="m">
            A 6 digit code has been sent to {phoneNumber}
          </StyledText>
          <Box flexDirection="row" justifyContent="space-evenly" marginBottom="l">
            <TextInput
              ref={input1}
              onKeyPress={handleFocusChange}
              style={styles.input}
              textContentType="oneTimeCode"
              keyboardType="number-pad"
              returnKeyType="next"
              maxLength={1}
              onChangeText={v => setCode(c => c.concat(v))}
            />
            <TextInput
              ref={input2}
              onKeyPress={handleFocusChange}
              style={styles.input}
              textContentType="oneTimeCode"
              keyboardType="number-pad"
              returnKeyType="next"
              maxLength={1}
              onChangeText={v => setCode(c => c.concat(v))}
            />
            <TextInput
              ref={input3}
              onKeyPress={handleFocusChange}
              style={styles.input}
              textContentType="oneTimeCode"
              keyboardType="number-pad"
              returnKeyType="next"
              maxLength={1}
              onChangeText={v => setCode(c => c.concat(v))}
            />
            <TextInput
              ref={input4}
              onKeyPress={handleFocusChange}
              style={styles.input}
              textContentType="oneTimeCode"
              keyboardType="number-pad"
              returnKeyType="next"
              maxLength={1}
              onChangeText={v => setCode(c => c.concat(v))}
            />
            <TextInput
              ref={input5}
              onKeyPress={handleFocusChange}
              style={styles.input}
              textContentType="oneTimeCode"
              keyboardType="number-pad"
              returnKeyType="next"
              maxLength={1}
              onChangeText={v => setCode(c => c.concat(v))}
            />
            <TextInput
              ref={input6}
              onKeyPress={handleFocusChange}
              style={styles.input}
              textContentType="oneTimeCode"
              keyboardType="number-pad"
              returnKeyType="next"
              maxLength={1}
              onChangeText={v => setCode(c => c.concat(v))}
            />
          </Box>
        </Box>
        <Box justifyContent="flex-end">
          <StyledText variant="bodyPrimary" textAlign="center" marginBottom="m">
            Didn't you receive any code?
          </StyledText>
          <TouchableWithoutFeedback onPress={handleRequestNewCode}>
            <StyledText variant="h3" textAlign="center" color="yellowDark">
              REQUEST A NEW CODE
            </StyledText>
          </TouchableWithoutFeedback>
        </Box>
      </Box>
      {loading && <Loading fullScreen />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 8,
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    textAlign: 'center',
  },
});

export default LoginVerifyCode;
