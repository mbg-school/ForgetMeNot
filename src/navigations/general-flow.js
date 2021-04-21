import React from 'react';
import HomeScreen from 'scenes/home';
import AboutScreen from 'scenes/about';
import SetupScreen from 'scenes/setup';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
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
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// const GeneralFlowNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="More" component={MoreNavigator} />
//     </Tab.Navigator>
//   );
// };

export default HomeNavigator;
