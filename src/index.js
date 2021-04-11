import React, {useState} from 'react';
import Navigator from 'navigations';
import {UserProvider} from 'utils/UserDataContext';
import {StatusProvider} from 'utils/StatusContext';
import {BleProvider} from 'utils/BleContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import handleEnableNotifications from 'utils/BleConnection';
import {bytesToString} from 'convert-string';
import {
  NativeModules,
  NativeEventEmitter,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {
  KEY_FIRST_NAME,
  KEY_LAST_NAME,
  KEY_CAR_MAKE,
  KEY_CAR_MODEL,
  KEY_CAR_YEAR,
} from 'utils/storage';

import {
  startScan,
  handleDiscoverPeripheral,
  handleStopScan,
  handleDisconnectedPeripheral,
} from 'utils/BleConnection';

import BleManager from 'react-native-ble-manager';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

function App() {
  const data = {
    firstName: '',
    lastName: '',
    carMake: '',
    carModel: '',
    carYear: '',
  };

  const status = {
    list: ['first alert', 'second alert'],
  };

  const readData = async () => {
    try {
      const firstName = await AsyncStorage.getItem(KEY_FIRST_NAME);
      const lastName = await AsyncStorage.getItem(KEY_LAST_NAME);
      const carMake = await AsyncStorage.getItem(KEY_CAR_MAKE);
      const carModel = await AsyncStorage.getItem(KEY_CAR_MODEL);
      const carYear = await AsyncStorage.getItem(KEY_CAR_YEAR);

      if (firstName !== null) {
        data.firstName = firstName;
      }
      if (lastName !== null) {
        data.lastName = lastName;
      }
      if (carMake !== null) {
        data.carMake = carMake;
      }
      if (carModel !== null) {
        data.carModel = carModel;
      }
      if (carYear !== null) {
        data.carYear = carYear;
      }

      setUserData(data);
      console.log('got here');
    } catch (e) {
      console.log('failed to read');
    }
  };

  const handleConnectedPeripheral = () => {
    setBleConnection(true);
    handleEnableNotifications();
  };

  React.useEffect(() => {
    readData();
    BleManager.start({showAlert: false});

    bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral,
    );
    bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan);
    bleManagerEmitter.addListener(
      'BleManagerDisconnectPeripheral',
      handleDisconnectedPeripheral,
    );
    bleManagerEmitter.addListener(
      'BleManagerConnectPeripheral',
      handleConnectedPeripheral,
    );
    bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      ({value, peripheral, characteristic, service}) => {
        // Convert bytes array to string
        const message = bytesToString(value);
        console.log(`Recieved ${message} for characteristic ${characteristic}`);
      },
    );

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then((result) => {
        if (result) {
          console.log('Permission is OK');
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ).then((result1) => {
            if (result1) {
              console.log('User accept');
            } else {
              console.log('User refuse');
            }
          });
        }
      });
    }
    startScan();

    return () => {
      console.log('unmount');

      bleManagerEmitter.removeListener(
        'BleManagerDiscoverPeripheral',
        handleDiscoverPeripheral,
      );
      bleManagerEmitter.removeListener('BleManagerStopScan', handleStopScan);
      bleManagerEmitter.removeListener(
        'BleManagerDisconnectPeripheral',
        handleDisconnectedPeripheral,
      );
      bleManagerEmitter.addListener(
        'BleManagerConnectPeripheral',
        handleConnectedPeripheral,
      );
    };
  }, []);

  const [userData, setUserData] = useState('');
  const [currentStatus, setCurrentStatus] = useState(status);
  const [bleConnection, setBleConnection] = useState(false);

  return (
    <UserProvider value={{userData, setUserData}}>
      <StatusProvider value={{currentStatus, setCurrentStatus}}>
        <BleProvider value={{bleConnection, setBleConnection}}>
          <Navigator />
        </BleProvider>
      </StatusProvider>
    </UserProvider>
  );
}

export default App;
