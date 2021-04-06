import React from 'react'; 
import {View, Text, Button} from 'react-native';
import {MyNotification} from 'utils/PushNotifications.js';
import PushNotification from "react-native-push-notification";

const AboutScreen = () => {

  const handlePress = () => {
    PushNotification.localNotificationSchedule({
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + 5 * 1000)
    });
    console.log("pressed")
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