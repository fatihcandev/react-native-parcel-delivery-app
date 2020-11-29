import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import Box from './Box';
import StyledText from './StyledText';

interface ILayoutProps {
  headingBig?: string;
  headingSmall?: string;
}

const Layout: React.FC<ILayoutProps> = ({ headingBig, headingSmall, children }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Box flex={1} paddingHorizontal="l" paddingVertical="xl">
        {headingBig && (
          <StyledText variant="h2" marginBottom="m">
            {headingBig}
          </StyledText>
        )}
        {headingSmall && (
          <StyledText variant="h3" marginBottom="m">
            {headingSmall}
          </StyledText>
        )}
        {children}
      </Box>
    </ScrollView>
  );
};

export default Layout;
