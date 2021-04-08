import React, {useState, useContext} from 'react'; 
import {BleContext} from 'utils/BleContext';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {HorizontalLine} from 'atoms/index.js';
import {Colors, Styles} from 'styles/index.js';

const WelcomeScreen = ({navigation}) => {

  const {bleConnection, setBleConnection} = useContext(BleContext);

  const ShowButton = () => {
    if (bleConnection) {
      return <Button title = 'next page' onPress = {() => navigation.navigate('Home')}/>
    }
    return null;
  }

  let line_props = {
    style: styles.line_style
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forget-Me-Not</Text>
      <Image
        source={require('assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.welc_text}>
        Thank you for choosing Forget Me Not!{'\n'}
        Please follow the below instructions:{'\n'}
      </Text>
      <HorizontalLine {...line_props} />
      <Text style={styles.inst_text}>
        Plug in the provided OBDII module into the OBDII port.
        The port can be found in the bottom left area of the steering wheel.
        A green light on the module will indicate it is working.
        Once your phone is connected to the OBDII, a button will appear to
        take you to the next page.
      </Text>
      <ShowButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    marginTop: 75
  },
  header: { 
    marginBottom: -50,
    fontWeight: 'bold',
    fontSize: 36
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
    marginTop: 50,
    backgroundColor: 'transparent',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    width: 300,
    height: 50,
    backgroundColor: Colors.SECONDARY
  },
  button_text: {
    ...Styles.ButtonTextStyle,
    fontSize: 16,
  },
  button_continue: {
    width: 100,
  },
  inst_text: {
    textAlign: 'center',
    margin: 10,
    fontSize: 16
  },
  welc_text: {
    fontWeight: 'bold',
    fontSize: 16
  },
  line_style: {
    width: 350
  }, 
})

export default WelcomeScreen;

