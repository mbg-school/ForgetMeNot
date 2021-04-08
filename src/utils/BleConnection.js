import {
  SavePeripheralID,
  SavePeripheralUUID,
  SavePeripheralRX,
  SavePeripheralTX
} from 'utils/storage';

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
          SavePeripheralRX(peripheralData.characteristics[5].characteristic)

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





