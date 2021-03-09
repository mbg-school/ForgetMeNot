import React from 'react';
import HomeScreen from 'scenes/home';
import StatusScreen from 'scenes/status';
import AboutScreen from 'scenes/about';
import ConfigurationScreen from 'scenes/configuration';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const GeneralFlowNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Configuration" component={ConfigurationScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default GeneralFlowNavigator;
