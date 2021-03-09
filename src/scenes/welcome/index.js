import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native';
import {NavigationButton, HorizontalLine} from 'atoms/index.js';
import {Colors} from 'styles/index.js';

const WelcomeScreen = () => {

  let props = {
    title: 'Begin Pairing',
    next_page: 'Parse',
    style: styles,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forget-Me-Not</Text>
      <Text style={styles.body_text}>
        Thank you for choosing Forget Me Not!{'\n'}
        Please follow the below instructions:{'\n'}
      </Text>
      <HorizontalLine />
      <Text style={styles.body_text}>
        Plug in the provided OBDII module into the OBDII port.{'\n'}
        The port can be found in the bottom left area of the steering wheel.{'\n'}
        A green light on the module will indicate it is working.{'\n'}
        Once done click the button to pair phone with the OBDII
      </Text>
      <NavigationButton {...props}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.PRIMARY
  },
  header: {
    flex: .25, 
    fontWeight: 'bold',
    fontSize: 36
  },
  button: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 20,
    borderWidth: 1,
    width: 150,
    height: 50,
    backgroundColor: Colors.SECONDARY
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 16
  },
  body_text: {
    marginLeft: 20,
    fontSize: 16
  },
})

export default WelcomeScreen;

