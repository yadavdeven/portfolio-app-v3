import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/common/SplashScreen';
import AppReloadScreen from '../screens/common/AppReloadScreen';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

export default function AppNavigator() {
  const [appState, setAppState] = useState({
    isLoading: true,
    isAuthenticated: false,
    hasError: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setAppState({
        isLoading: false,
        isAuthenticated: true,
        hasError: false,
      });
    }, 3000);
  }, []);

  if (appState.isLoading) {
    return <SplashScreen />;
  }

  if (appState.hasError) {
    return <AppReloadScreen />;
  }

  return (
    <NavigationContainer>
      {appState.isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
