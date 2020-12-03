import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Box from './Box';
import Tab from './Tab';

interface ITabBarViewProps {
  labels: string[];
  contents: React.ReactNode[];
  icons?: string[];
}

const TabBarView: React.FC<ITabBarViewProps> = ({ labels, icons, contents }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Box flex={1}>
      <Box flexDirection="row" position="relative">
        {labels.map((label, index) => (
          <View key={index}>
            <Tab
              {...{ label }}
              onPress={() => setActiveTab(index)}
              isActive={index === activeTab}
              icon={icons ? icons[index] : undefined}
            />
          </View>
        ))}
      </Box>
      <ScrollView>
        {contents.map((content, index) => {
          if (activeTab === index) {
            return (
              <Box flex={1} key={index} paddingVertical="m">
                {content}
              </Box>
            );
          }
        })}
      </ScrollView>
    </Box>
  );
};

export default TabBarView;
