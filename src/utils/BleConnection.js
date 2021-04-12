import {
  SavePeripheralID,
  SavePeripheralUUID,
  SavePeripheralTX,
  SavePeripheralRX,
} from 'utils/storage';

import BleManager from 'react-native-ble-manager';

export function startScan() {
  BleManager.scan([], 300, true)
    .then((results) => {
      console.log('scanning');
    })
    .catch((err) => {
      console.error(err);
    });
}

export function handleStopScan() {
  console.log('done scanning');
}

export function handleDisconnectedPeripheral() {
  console.log('disconnected from esp32');
  startScan();
}

export function handleEnableNotifications(ID, UUID, TX) {
  BleManager.startNotification(ID, UUID, TX, 1)
    .then(() => {
      console.log('Notification started');
    })
    .catch((error) => {
      console.log(error);
    });
}

export function handleDiscoverPeripheral(peripheral) {
  if (peripheral.name === 'ESP32 Tech DEMO') {
    BleManager.connect(peripheral.id)
      .then(() => {
        peripheral.connected = true;

        console.log('Connected to ' + peripheral.name);
        BleManager.stopScan();

        setTimeout(() => {
          /* Test read current RSSI value */
          BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
            console.log('Retrieved peripheral services', peripheralData);
            let id = peripheral.id;
            let uuid = peripheralData.services[2].uuid;
            let rx = peripheralData.characteristics[5].characteristic;
            let tx = peripheralData.characteristics[4].characteristic;
            SavePeripheralID(id);
            SavePeripheralUUID(uuid);
            SavePeripheralRX(rx);
            SavePeripheralTX(tx);

            handleEnableNotifications(id, uuid, tx);

            BleManager.readRSSI(peripheral.id).then((rssi) => {
              console.log('Retrieved actual RSSI value', rssi);
            });
          });
        }, 900);
      })
      .catch((error) => {
        console.log('Connection error', error);
      });
  }
}
