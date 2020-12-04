import React, { useCallback, useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { AppContext, AUTH_FINISHED } from 'context';
import { Loading } from 'components';
import RootNavigator from './RootNavigator';
import AuthNavigator from './AuthNavigator';

const Navigator = () => {
  const [fbUser, setFbUser] = useState<FirebaseAuthTypes.User | null>(null);
  const { dispatch, state } = useContext(AppContext);
  const { authLoading } = state;

  const handleAuth = useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      setFbUser(user);
      dispatch({
        type: AUTH_FINISHED,
      });
    },
    [dispatch],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuth);
    return () => {
      subscriber();
    };
  }, [handleAuth]);

  return authLoading ? (
    <Loading />
  ) : (
    <NavigationContainer>
      {fbUser === null ? <AuthNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
