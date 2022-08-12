import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRouter from './MainRouter';
import RNBootSplash from 'react-native-bootsplash';
export default function Router() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <MainRouter />
    </NavigationContainer>
  );
}
