import React, {Component} from 'react'; 
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      })
  );

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;