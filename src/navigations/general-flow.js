import React from 'react';
import HomeScreen from 'scenes/home';
import StatusScreen from 'scenes/status';
import AboutScreen from 'scenes/about';
import ConfigurationScreen from 'scenes/configuration';
import SetupScreen from 'scenes/setup';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      headerMode='none'
    >
      <Stack.Screen name="Configuration" component={ConfigurationScreen}/>
      <Stack.Screen name="Setup" component={SetupScreen}/>
    </Stack.Navigator>
  );
}

const GeneralFlowNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Configuration" component={SettingsNavigator} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default GeneralFlowNavigator;
