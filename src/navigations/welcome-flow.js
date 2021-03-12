import React from 'react';
import WelcomeScreen from 'scenes/welcome';
import ParseScreen from 'scenes/parse';
import SetupScreen from 'scenes/setup';
import GeneralFlowNavigator from 'navigations/general-flow';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Welcome"
      headerMode="none"
    >
      <Stack.Screen name ="Welcome" component={WelcomeScreen} />
      <Stack.Screen name ="Parse" component={ParseScreen} />
      <Stack.Screen name ="Setup" component={SetupScreen} />
      <Stack.Screen name ="Home" component={GeneralFlowNavigator} />
      <Stack.Screen name ="Configuration" component={GeneralFlowNavigator} />
    </Stack.Navigator>
  );
}

export default StackNavigator;