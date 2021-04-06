import PushNotification from "react-native-push-notification";

export function MyNotification() {

  PushNotification.localNotificationSchedule({
    message: "My Notification Message", // (required)
    date: new Date(Date.now() + 5 * 1000)
  });

};

