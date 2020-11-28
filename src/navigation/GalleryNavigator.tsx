import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { GalleryRoutes } from 'types';
import { Gallery, CloudGallery } from 'views';

const GalleryStack = createStackNavigator<GalleryRoutes>();

const GalleryNavigator = () => {
  return (
    <GalleryStack.Navigator headerMode="none">
      <GalleryStack.Screen name="Gallery" component={Gallery} />
      <GalleryStack.Screen name="CloudGallery" component={CloudGallery} />
    </GalleryStack.Navigator>
  );
};

export default GalleryNavigator;
