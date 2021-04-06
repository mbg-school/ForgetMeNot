import {AppRegistry, Platform} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import PushNotification from "react-native-push-notification";

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
    PushNotification.cancelLocalNotifications({id: '1'})
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,
  
  requestPermissions: Platform.OS === 'android',
});

PushNotification.createChannel({
  channelId: "channel_id",
  channelName: "test-channel"
},
  () => console.log('created channel')
);

AppRegistry.registerComponent(appName, () => App);
