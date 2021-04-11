import React from 'react';
import HomeScreen from 'scenes/home';
import StatusScreen from 'scenes/status';
import AboutScreen from 'scenes/about';
import ConfigurationScreen from 'scenes/configuration';
import SetupScreen from 'scenes/setup';
import MoreScreen from 'scenes/more';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MoreNavigator = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Configuration"
        component={ConfigurationScreen}
        options={{
          title: 'Your Profile',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Setup"
        component={SetupScreen}
        options={{
          title: 'Settings',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const GeneralFlowNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="More" component={MoreNavigator} />
    </Tab.Navigator>
  );
};

export default GeneralFlowNavigator;
