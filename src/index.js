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

  const data = {
    firstName: '',
    lastName: '',
    carMake: '',
    carModel: '',
    carYear: '',
    timeSetting: ''
  };

  const readData = async () => {
    try {
        const firstName = await AsyncStorage.getItem(KEY_FIRST_NAME);
        const lastName = await AsyncStorage.getItem(KEY_LAST_NAME);
        const carMake = await AsyncStorage.getItem(KEY_CAR_MAKE);
        const carModel = await AsyncStorage.getItem(KEY_CAR_MODEL);
        const carYear = await AsyncStorage.getItem(KEY_CAR_YEAR);
        const timeSetting = await AsyncStorage.getItem(KEY_TIME_SETTING);

        if (firstName !== null) data.firstName = firstName;
        if (lastName !== null) data.lastName = lastName;
        if (carMake !== null) data.carMake = carMake;
        if (carModel !== null) data.carModel = carModel;
        if (carYear !== null) data.carYear = carYear;
        if (timeSetting !== null) data.timeSetting = timeSetting;

        setUserData(data);
        
    } catch (e) {
      console.log('failed to read');
    }
  }

  React.useEffect(() => {
    readData()
  }, [])

  const [userData, setUserData] = useState(data);

  return (
    <UserProvider value = {{userData, setUserData}}>
      <Navigator />
    </UserProvider>
  );
}

export default App;