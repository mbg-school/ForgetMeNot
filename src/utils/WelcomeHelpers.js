import {handleEnableNotifications} from 'utils/BleConnection';
import {SaveNotification} from 'utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_NOTIFICATION} from 'utils/storage';

export function handleYes() {
  handleEnableNotifications();
  SaveNotification('true');
}

export function handleNo() {
  SaveNotification('false');
}

export async function getChoice() {
  try {
    const choice = await AsyncStorage.getItem(KEY_NOTIFICATION);

    if (choice === 'true') {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
  return false;
}
