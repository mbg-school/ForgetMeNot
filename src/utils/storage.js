import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_FIRST_NAME = '@save_firstname';
const KEY_LAST_NAME = '@save_lastname';
const KEY_CAR_MAKE = '@save_carmake';
const KEY_CAR_MODEL = '@save_carmodel';
const KEY_CAR_YEAR = '@save_caryear';
const KEY_TIME_SETTING = '@save_timesetting';

const KEY_TIME_ALERTS = '@save_timealert';
const KEY_ACTION_ALERTS = '@save_actionalert';

const KEY_PERIPHERAL_UUID = '@save_peripheral_uuid';
const KEY_PERIPHERAL_ID = '@save_peripheral_id';
const KEY_PERIPHERAL_RX = '@save_peripheral_rx';
const KEY_PERIPHERAL_TX = '@save_peripheral_tx';

const saveFirstName = async (firstname) => {
  try {
    await AsyncStorage.setItem(KEY_FIRST_NAME, firstname); 
  } catch (e) {
    console.log();
  }
}
const saveLastName = async (lastname) => {
  try {
    await AsyncStorage.setItem(KEY_LAST_NAME, lastname); 
  } catch (e) {
    console.log('failed to save');
  }
}
const saveCarMake = async (carmake) => {
  try {
    await AsyncStorage.setItem(KEY_CAR_MAKE, carmake); 
  } catch (e) {
    console.log('failed to save');
  }
}
const saveCarModel = async (carmodel) => {
  try {
    await AsyncStorage.setItem(KEY_CAR_MODEL, carmodel); 
  } catch (e) {
    console.log('failed to save');
  }
}
const saveCarYear = async (caryear) => {
  try {
    await AsyncStorage.setItem(KEY_CAR_YEAR, caryear); 
  } catch (e) {
    console.log('failed to save');
  }
}
const saveTimeSetting = async (timesetting) => {
  try {
    await AsyncStorage.setItem(KEY_TIME_SETTING, timesetting); 
  } catch (e) {
    console.log('failed to save');
  }
}

const ReadTimeAlerts = async () => {
  try {
    const timeAlerts = await AsyncStorage.getItem(KEY_TIME_ALERTS);
    return timeAlerts != null ? JSON.parse(timeAlerts) : null;
  } catch (e) {
    console.log('could not load');
  }
}

const SaveTimeAlert = async (time_alert) => {
  try {
    const pastAlerts = ReadTimeAlerts();
    const updatedAlerts = {...pastAlerts, ...time_alert};
    await AsyncStorage.setItem(KEY_TIME_ALERTS, JSON.stringify(updatedAlerts));
  } catch (e) {
    console.log('Failed to add alert')
  }
}

const SavePeripheralID = async (id) => {
  try {
    await AsyncStorage.setItem(KEY_PERIPHERAL_ID, id);
  } catch (e) {
    console.log('Failed to save');
  }
}

const SavePeripheralUUID = async (uuid) => {
  try {
    await AsyncStorage.setItem(KEY_PERIPHERAL_UUID, uuid);
  } catch (e) {
    console.log('Failed to save')
  }
}

const SavePeripheralTX = async (char) => {
  try {
    await AsyncStorage.setItem(KEY_PERIPHERAL_TX, char);
  } catch (e) {
    console.log('Failed to save')
  }
}

const SavePeripheralRX = async (char) => {
  try {
    await AsyncStorage.setItem(KEY_PERIPHERAL_RX, char);
  } catch (e) {
    console.log('Failed to save')
  }
}

const ReadPeripheralID = async () => {
  try {
    const id = await AsyncStorage.getItem(KEY_PERIPHERAL_ID);
    return id; 
  } catch (e) {
    console.log('failed to read');
  } 
}

const ReadPeripheralUUID = async () => {
  try {
    const uuid = await AsyncStorage.getItem(KEY_PERIPHERAL_UUID);
    return uuid; 
  } catch (e) {
    console.log('failed to read');
  } 
}

const ReadPeripheralTX = async () => {
  try {
    const tx = await AsyncStorage.getItem(KEY_PERIPHERAL_TX);
    return tx; 
  } catch (e) {
    console.log('failed to read');
  } 
}

const ReadPeripheralRX = async () => {
  try {
    const rx = await AsyncStorage.getItem(KEY_PERIPHERAL_RX);
    return rx; 
  } catch (e) {
    console.log('failed to read');
  } 
}

const SaveData = (data) => {
  if (data.firstName !== null && data.firstName !== '')
    saveFirstName(data.firstName);
  if (data.lastName !== null && data.lastName !== '')
    saveLastName(data.lastName);
  if (data.carMake !== null && data.carMake !== '')
    saveCarMake(data.carMake);
  if (data.carModel !== null && data.carModel !== '')
    saveCarModel(data.carModel);
  if (data.carYear !== null && data.carYear !== '')
    saveCarYear(data.carYear)
  if (data.timeSetting !== null && data.timeSetting !== '')
    saveTimeSetting(data.timeSetting);
}

const restoreDefault = async (keys) => {
  try {
    await AsyncStorage.multiRemove(keys);
    alert('Reset to default!');
  } catch (e) {
    alert('Failed to reset the async storage');
  }
}

export {
  SaveData,
  restoreDefault,
  SaveTimeAlert,
  ReadTimeAlerts,
  SavePeripheralID,
  SavePeripheralUUID,
  SavePeripheralTX,
  SavePeripheralRX,
  ReadPeripheralID,
  ReadPeripheralUUID,
  ReadPeripheralRX,
  KEY_FIRST_NAME,
  KEY_LAST_NAME,
  KEY_CAR_MAKE,
  KEY_CAR_MODEL,
  KEY_CAR_YEAR,
  KEY_TIME_SETTING,
  KEY_TIME_ALERTS,
  KEY_PERIPHERAL_ID,
  KEY_PERIPHERAL_UUID,
  KEY_PERIPHERAL_TX,
  KEY_PERIPHERAL_RX
}