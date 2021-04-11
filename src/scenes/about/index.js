import React from 'react';
import {View, Text, Button} from 'react-native';
import {MyNotification} from 'utils/PushNotifications.js';
import {
  KEY_FIRST_NAME,
  KEY_PERIPHERAL_ID,
  KEY_PERIPHERAL_TX,
  KEY_PERIPHERAL_UUID,
  restoreDefault,
} from 'utils/storage';

const AboutScreen = () => {
  const props = {
    message: 'Working',
  };

  const handlePush = () => {
    MyNotification(props);
  };

  const handleDefault = () => {
    let key = [
      KEY_FIRST_NAME,
      KEY_PERIPHERAL_ID,
      KEY_PERIPHERAL_TX,
      KEY_PERIPHERAL_UUID,
    ];
    restoreDefault(key);
  };

  return (
    <View>
      <Text>About Screen</Text>
      <Button title="Push" onPress={handlePush} />
      <Button title="Restore Default" onPress={handleDefault} />
    </View>
  );
};

export default AboutScreen;
