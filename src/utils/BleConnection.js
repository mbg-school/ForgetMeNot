import {
  SavePeripheralID,
  SavePeripheralUUID,
  SavePeripheralRX,
  SavePeripheralTX,
  KEY_PERIPHERAL_ID,
  KEY_PERIPHERAL_UUID,
  KEY_PERIPHERAL_TX
} from 'utils/storage';

import AsyncStorage from '@react-native-async-storage/async-storage';

import BleManager from 'react-native-ble-manager';

export function startScan() {
  BleManager.scan([], 300, true).then((results) => {
    console.log('scanning');
  }).catch(err => {
    console.error(err);
  });
}

export function handleStopScan() {
  console.log('done scanning');
}

export function handleDiscoverPeripheral(peripheral) {
  if (peripheral.name == 'ESP32 Tech DEMO') {
    BleManager.connect(peripheral.id).then(() => {
      peripheral.connected = true;
    
      console.log('Connected to ' + peripheral.name);
      BleManager.stopScan();

      setTimeout(() => {
        /* Test read current RSSI value */
        BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
          console.log('Retrieved peripheral services', peripheralData);
          SavePeripheralID(peripheral.id);
          SavePeripheralUUID(peripheralData.services[2].uuid);
          SavePeripheralTX(peripheralData.characteristics[4].characteristic);
          SavePeripheralRX(peripheralData.characteristics[5].characteristic);

          BleManager.readRSSI(peripheral.id).then((rssi) => {
            console.log('Retrieved actual RSSI value', rssi);               
          });
        });
      }, 900);
    }).catch((error) => {
      console.log('Connection error', error);
    });
  }
}

export function handleDisconnectedPeripheral() {
  console.log('disconnected from esp32');
  startScan();
}

export async function handleEnableNotifications() {

  let peripheralID = null;
  let peripheralUUID = null; 
  let peripheralTX = null; 
  
  try {
    const ID = await AsyncStorage.getItem(KEY_PERIPHERAL_ID);
    if (ID !== null) peripheralID = ID;
  } catch (e) {
    console.log('failed to read');
  } 

  try {
    const UUID = await AsyncStorage.getItem(KEY_PERIPHERAL_UUID);
    if (UUID !== null) peripheralUUID = UUID; 
  } catch (e) {
    console.log('failed to read');
  }

  try {
    const TX = await AsyncStorage.getItem(KEY_PERIPHERAL_TX);
    if (TX !== null) peripheralTX = TX; 
  } catch (e) {
    console.log('failed to read');
  } 

  BleManager.startNotification(peripheralID, peripheralUUID, peripheralTX, 1)
    .then(() => {
      console.log("Notification started");
    })
    .catch((error) => {
      console.log(error)
    })

}





