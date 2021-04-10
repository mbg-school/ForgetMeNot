import React from 'react';
import WelcomeScreen from 'scenes/welcome';
import ParseScreen from 'scenes/parse';
import SetupScreen from 'scenes/setup';
import GeneralFlowNavigator from 'navigations/general-flow';
import { createStackNavigator } from '@react-navigation/stack';
import {KEY_FIRST_NAME} from 'utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

let currentUser = false; 

const checkCurrentUser = async () => {
  try {
    const firstName = await AsyncStorage.getItem(KEY_FIRST_NAME);
    if (firstName !== null) currentUser = true;
  } catch (e) {
    console.log('failed to read');
  }
}

function StackNavigator() {
  checkCurrentUser();
  if (!currentUser) {
    return (
      <Stack.Navigator 
        initialRouteName="Welcome"
        headerMode="none"
      >
        <Stack.Screen name ="Welcome" component={WelcomeScreen} />
        <Stack.Screen name ="Parse" component={ParseScreen} />
        <Stack.Screen name ="Setup" component={SetupScreen} />
        <Stack.Screen name ="Home" component={GeneralFlowNavigator} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator 
        initialRouteName="Home"
        headerMode="none"
      >
        <Stack.Screen name ="Home" component={GeneralFlowNavigator} />
      </Stack.Navigator>
    );
  }
}

export default StackNavigator;