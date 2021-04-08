import React from 'react'; 
import {View, Text, Button} from 'react-native';
import {MyNotification} from 'utils/PushNotifications.js';

const AboutScreen = () => {
  const props = {
    message: "Working"
  }

  const handlePress = () => {
    MyNotification(props);
  }

  return (
    <View>
      <Text>About Screen</Text>
      <Button
        title = "Push"
        onPress = {handlePress}
      />
    </View>
  );
}

export default AboutScreen;