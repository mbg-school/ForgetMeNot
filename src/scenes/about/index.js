import React from 'react'; 
import {View, Text, Button} from 'react-native';
import {MyNotification} from 'utils/PushNotifications.js';
import {
  KEY_FIRST_NAME,
  restoreDefault
} from 'utils/storage';

const AboutScreen = () => {
  const props = {
    message: "Working"
  }

  const handlePush = () => {
    MyNotification(props);
  }

  const handleDefault = () => {
    restoreDefault([KEY_FIRST_NAME]);
  }

  return (
    <View>
      <Text>About Screen</Text>
      <Button
        title = "Push"
        onPress = {handlePush}
      />
      <Button
        title = "Restore Default"
        onPress = {handleDefault}
      />
    </View>
  );
}

export default AboutScreen;