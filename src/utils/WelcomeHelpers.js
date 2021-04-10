import {Alert} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export function handlePress() {

  Alert.alert(
    "Enable Notifications?",
    "Would you like to enable push notifications:",
    [
      {
        text: "Yes",
        onPress: () => {handleYes()},
        style: "default"
      },
      {
        text: "No",
        onPress: () => {handleNo()},
        style: "cancel"
      }
    ]
  )
}