import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRouter from './AuthRouter';

const Stack = createNativeStackNavigator();
export default function MainRouter() {
  return (
    <Stack.Navigator
      initialRouteName="auth"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="auth" component={AuthRouter} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
