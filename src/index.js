import React, {useState} from 'react';
import Navigator from 'navigations';
import {UserProvider} from 'utils/UserDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  KEY_FIRST_NAME,
  KEY_LAST_NAME,
  KEY_CAR_MAKE,
  KEY_CAR_MODEL,
  KEY_CAR_YEAR,
  KEY_TIME_SETTING
} from 'utils/storage';

function App() { 

  let first_name = '';
  let last_name = '';
  let car_make = '';
  let car_model = '';
  let car_year = '';
  let time_setting = '';

  const readData = async () => {
    try {
        const firstName = await AsyncStorage.getItem(KEY_FIRST_NAME);
        const lastName = await AsyncStorage.getItem(KEY_LAST_NAME);
        const carMake = await AsyncStorage.getItem(KEY_CAR_MAKE);
        const carModel = await AsyncStorage.getItem(KEY_CAR_MODEL);
        const carYear = await AsyncStorage.getItem(KEY_CAR_YEAR);
        const timeSetting = await AsyncStorage.getItem(KEY_TIME_SETTING);

        if (firstName !== null) first_name = firstName;
        if (lastName !== null) last_name = lastName;
        if (carMake !== null) car_make = carMake;
        if (carModel !== null) car_model = carModel;
        if (carYear !== null) car_year = carYear;
        if (timeSetting !== null) time_setting = timeSetting;

    } catch (e) {
      console.log('failed to read');
    }
  }

  React.useEffect(() => {
    readData()
  }, [])

  const data = {
    firstName: first_name,
    lastName: last_name,
    carMake: car_make,
    carModel: car_model,
    carYear: car_year,
    timeSetting: time_setting
  };

  const [userData, setUserData] = useState(data);

  return (
    <UserProvider value = {{userData, setUserData}}>
      <Navigator />
    </UserProvider>
  );
}

export default App;