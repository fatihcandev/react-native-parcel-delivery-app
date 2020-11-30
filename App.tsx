import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';

import { AppProvider } from 'context';
import theme from 'theme';
import { NotificationHandler } from 'components';
import Navigator from 'navigation';

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider {...{ theme }}>
        <SafeAreaProvider>
          <NotificationHandler />
          <Navigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
