import PushNotification from "react-native-push-notification";

export function MyNotification(props) {

  let message = props.message;

  PushNotification.localNotificationSchedule({
    channelId: "channel_id",
    message: message, // (required)
    date: new Date(Date.now()),
    id: '1'
  });

};

