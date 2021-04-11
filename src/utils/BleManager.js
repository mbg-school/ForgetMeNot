import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  NativeModules,
  NativeEventEmitter,
  Platform,
  PermissionsAndroid,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {Styles} from 'styles/index';
import {
  SavePeripheralID,
  SavePeripheralUUID,
  SavePeripheralRX,
  SavePeripheralTX,
} from 'utils/storage';

import BleManager from 'react-native-ble-manager';
import {useNavigation} from '@react-navigation/native';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const BleConnector = () => {
  const [isScanning, setIsScanning] = useState(false);
  const peripherals = new Map();
  const [list, setList] = useState([]);
  const navigation = useNavigation();

  const enableBluetooth = () => {
    BleManager.enableBluetooth()
      .then(() => {
        console.log('Bluetooth enabled');
      })
      .catch((error) => {
        console.log('Bluetooth not enabled');
      });
  };

  const startScan = () => {
    if (!isScanning) {
      BleManager.scan([], 3, true)
        .then((results) => {
          setIsScanning(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleStopScan = () => {
    setIsScanning(false);
  };

  const handleDisconnectedPeripheral = (data) => {
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      setList(Array.from(peripherals.values()));
    }
    console.log('Disconnected from ' + data.peripheral);
  };

  const handleUpdateValueForCharacteristic = (data) => {
    console.log(
      'Received data from ' +
        data.peripheral +
        ' characteristic ' +
        data.characteristic,
      data.value,
    );
  };

  const handleDiscoverPeripheral = (peripheral) => {
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    peripherals.set(peripheral.id, peripheral);
    setList(Array.from(peripherals.values()));
  };

  const testPeripheral = (peripheral) => {
    if (peripheral) {
      if (peripheral.connected) {
        BleManager.disconnect(peripheral.id);
      } else {
        BleManager.connect(peripheral.id)
          .then(() => {
            peripheral.connected = true;
            let p = peripherals.get(peripheral.id);
            if (p) {
              p.connected = true;
              peripherals.set(peripheral.id, p);
              setList(Array.from(peripherals.values()));
            }
            console.log('Connected to ' + peripheral.id);

            setTimeout(() => {
              /* Test read current RSSI value */
              BleManager.retrieveServices(peripheral.id).then(
                (peripheralData) => {
                  console.log('Retrieved peripheral services', peripheralData);
                  SavePeripheralID(peripheral.id);
                  SavePeripheralUUID(peripheralData.services[2].uuid);
                  SavePeripheralTX(
                    peripheralData.characteristics[4].characteristic,
                  );
                  SavePeripheralRX(
                    peripheralData.characteristics[5].characteristic,
                  );
                  Alert.alert('OBDII connected!', null, [
                    {
                      text: 'Continue',
                      onPress: () => navigation.navigate('Parse'),
                      style: 'default',
                    },
                  ]);

                  BleManager.readRSSI(peripheral.id).then((rssi) => {
                    console.log('Retrieved actual RSSI value', rssi);
                    let p = peripherals.get(peripheral.id);
                    if (p) {
                      p.rssi = rssi;
                      peripherals.set(peripheral.id, p);
                      setList(Array.from(peripherals.values()));
                    }
                  });
                },
              );
            }, 900);
          })
          .catch((error) => {
            console.log('Connection error', error);
          });
      }
    }
  };

  useEffect(() => {
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
      'BleManagerDidUpdateValueForCharacteristic',
      handleUpdateValueForCharacteristic,
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
          ).then((result) => {
            if (result) {
              console.log('User accept');
            } else {
              console.log('User refuse');
            }
          });
        }
      });
    }

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
      bleManagerEmitter.removeListener(
        'BleManagerDidUpdateValueForCharacteristic',
        handleUpdateValueForCharacteristic,
      );
    };
  }, []);

  const renderItem = (item) => {
    if (item.name.includes('ESP32')) {
      return (
        <TouchableHighlight
          style={styles.button}
          onPress={() => testPeripheral(item)}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.button_text}>{item.name}</Text>
          </View>
        </TouchableHighlight>
      );
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={{margin: 10}}>
            <TouchableOpacity onPress={() => startScan()} style={styles.button}>
              <Text style={styles.button_text}>
                {'Search for OBDII (' + (isScanning ? 'on' : 'off') + ')'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={list}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: -20,
  },
  button_text: {
    ...Styles.ButtonTextStyle,
    fontWeight: 'bold',
  },
  button: {
    ...Styles.ButtonStyle,
    alignSelf: 'center',
    margin: 5,
    marginTop: 20,
  },
});

export default BleConnector;
