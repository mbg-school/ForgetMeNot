import React from 'react';
import StackNavigator from 'navigations/welcome-flow';
import {NavigationContainer} from '@react-navigation/native';

function Navigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default Navigator;
