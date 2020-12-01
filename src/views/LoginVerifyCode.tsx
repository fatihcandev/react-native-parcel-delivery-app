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
  const input1Ref = input1.current;
  const input2Ref = input2.current;
  const input3Ref = input3.current;
  const input4Ref = input4.current;
  const input5Ref = input5.current;
  const input6Ref = input6.current;

  const handleVerifyCode = useCallback(async () => {
    setLoading(true);
    try {
      await confirmationResult?.confirm(code);
    } catch (error) {
      Alert.alert('Error', error.message);
      setLoading(false);
    } finally {
      setLoading(false);
      setCode('');
    }
  }, [code, confirmationResult]);

  useEffect(() => {
    if (code.length === 1) {
      input1Ref?.blur();
      input2Ref?.focus();
    }
    if (code.length === 2) {
      input2Ref?.blur();
      input3Ref?.focus();
    }
    if (code.length === 3) {
      input3Ref?.blur();
      input4Ref?.focus();
    }
    if (code.length === 4) {
      input4Ref?.blur();
      input5Ref?.focus();
    }
    if (code.length === 5) {
      input5Ref?.blur();
      input6Ref?.focus();
    }
    if (code.length === 6) {
      input6Ref?.blur();
      handleVerifyCode();
    }
  }, [
    code.length,
    handleVerifyCode,
    input1Ref,
    input2Ref,
    input3Ref,
    input4Ref,
    input5Ref,
    input6Ref,
  ]);

  const handleRequestNewCode = async () => {
    setLoading(true);
    try {
      const confirmationResultNew = await auth().signInWithPhoneNumber(phoneNumber!, true);
      if (confirmationResultNew) {
        dispatch({
          type: VERIFY_PHONE_NUMBER,
          data: {
            phoneNumber,
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
    if (input6Ref?.isFocused() && isBackspacePressed) {
      if (code.length > 5) {
        setCode(c => c.substring(0, 5));
      } else {
        input6Ref?.blur();
        input5Ref?.focus();
      }
    } else if (input5Ref?.isFocused() && isBackspacePressed) {
      if (code.length > 4) {
        setCode(c => c.substring(0, 4));
      } else {
        input5Ref?.blur();
        input4Ref?.focus();
      }
    } else if (input4Ref?.isFocused() && isBackspacePressed) {
      if (code.length > 3) {
        setCode(c => c.substring(0, 3));
      } else {
        input4Ref?.blur();
        input3Ref?.focus();
      }
    } else if (input3Ref?.isFocused() && isBackspacePressed) {
      if (code.length > 2) {
        setCode(c => c.substring(0, 2));
      } else {
        input3Ref?.blur();
        input2Ref?.focus();
      }
    } else if (input2Ref?.isFocused() && isBackspacePressed) {
      if (code.length > 1) {
        setCode(c => c.substring(0, 1));
      } else {
        input2Ref?.blur();
        input1Ref?.focus();
      }
    } else if (input1Ref?.isFocused() && isBackspacePressed) {
      setCode('');
      input1Ref?.blur();
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
