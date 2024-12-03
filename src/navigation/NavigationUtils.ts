import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from '../types/navigation/navigation';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export function resetStack(name: keyof RootStackParamList) {
  navigationRef.current?.dispatch(
    CommonActions.reset({index: 0, routes: [{name}]}),
  );
}
