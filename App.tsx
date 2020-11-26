import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';

import { AppProvider } from 'context';
import Navigator from 'navigation';
import theme from 'theme';
import { NotificationHandler } from 'components';

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider {...{ theme }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <>
              <Navigator />
              <NotificationHandler />
            </>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
