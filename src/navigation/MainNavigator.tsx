import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import HomeScreen from '../screens/common/HomeScreen';
import AppReloadScreen from '../screens/common/AppReloadScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.APP_RELOAD} component={AppReloadScreen} />
    </Stack.Navigator>
  );
}
