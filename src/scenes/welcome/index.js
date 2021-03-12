import React from 'react'; 
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationButton, HorizontalLine} from 'atoms/index.js';
import {Colors} from 'styles/index.js';

const WelcomeScreen = () => {

  let props = {
    title: 'Begin Pairing',
    next_page: 'Parse',
    style: styles,
    previous_page: 'Welcome'
  };

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
        Once done click the button to pair phone with the OBDII
      </Text>
      <NavigationButton {...props}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE
  },
  header: {
    flex: .3, 
    marginBottom: -50,
    fontWeight: 'bold',
    fontSize: 36
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    width: 150,
    height: 50,
    backgroundColor: Colors.SECONDARY
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 16
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
  }
})

export default WelcomeScreen;

