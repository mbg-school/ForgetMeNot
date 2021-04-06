import React, {useState} from 'react'; 
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {HorizontalLine} from 'atoms/index.js';
import {Styles} from 'styles/index';
import BleManager from 'react-native-ble-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {stringToBytes} from 'convert-string';
import {
  KEY_PERIPHERAL_ID,
  KEY_PERIPHERAL_UUID,
  KEY_PERIPHERAL_TX,
  KEY_PERIPHERAL_RX
} from 'utils/storage';

const ParseScreen = ({navigation}) => {

  const [peripheralID, setPeripheralID] = useState();
  const [peripheralUUID, setPeripheralUUID] = useState();
  const [peripheralRX, setPeripheralRX] = useState(); 

  const getData = async () => {
    try {
      const id = await AsyncStorage.getItem(KEY_PERIPHERAL_ID);
      const uuid = await AsyncStorage.getItem(KEY_PERIPHERAL_UUID);
      const tx = await AsyncStorage.getItem(KEY_PERIPHERAL_TX);
      const rx = await AsyncStorage.getItem(KEY_PERIPHERAL_RX);

      setPeripheralID(id);
      setPeripheralUUID(uuid);
      setPeripheralRX(rx);
    } catch (e) {
      console.log('failed');
    }
  };

  const turnOnLED = () => {
    const data = stringToBytes('on');
    BleManager.write(
      peripheralID, 
      peripheralUUID, 
      peripheralRX, 
      data
    ).then(() => {
      console.log("write: " + data);
      navigation.navigate('Setup', {name: 'Parse'});
    })
    .catch((e) => {
      console.log(e);
    })
  };

  React.useEffect(() => {
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      });
      getData();
  });

  let line_props = {
    style: styles.line_style
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.body_text}>
        We will now set your OBDII to work with your car!
        Click the button below to let your OBDII know it is time 
        to start monitoring the status of your car.
      </Text>
      <HorizontalLine {...line_props} />
      <TouchableOpacity
        style = {styles.button}
        onPress = {turnOnLED}
      >
        <Text style = {styles.button_text}>
          Get Data
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo: {
    flex: .2,
    marginTop: -50,
    marginBottom: 20,
    height: 100,
    width: 100
  },
  body_text: {
    flex: .3,
    marginBottom: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 16
  },
  instruction_text: {
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 16
  },
  line_style: {
    marginHorizontal: 0,
    marginTop: 0,
    width: 350
  },
  button: {
    ...Styles.ButtonStyle
  },
  button_text: {
    ...Styles.ButtonTextStyle
  }
})

export default ParseScreen;