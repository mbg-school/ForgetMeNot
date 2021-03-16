import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_FIRST_NAME = '@save_firstname';
const KEY_LAST_NAME = '@save_lastname';
const KEY_CAR_MAKE = '@save_carmake';
const KEY_CAR_MODEL = '@save_carmodel';
const KEY_CAR_YEAR = '@save_caryear';
const KEY_TIME_SETTING = '@save_timesetting';

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

const ClearStorage = async () => {
  try {
    await AsyncStorage.clear();
    alert('Storage successfully cleared!');
  } catch (e) {
    alert('Failed to clear the async storage');
  }
}

export {
  SaveData,
  ClearStorage,
  KEY_FIRST_NAME,
  KEY_LAST_NAME,
  KEY_CAR_MAKE,
  KEY_CAR_MODEL,
  KEY_CAR_YEAR,
  KEY_TIME_SETTING
}