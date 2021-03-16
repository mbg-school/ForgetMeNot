import React from 'react'; 
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationButton, HorizontalLine} from 'atoms/index.js';

const ParseScreen = ({navigation}) => {

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      })
  );

  let props1 = {
    title: 'Windows',
    style: button,
    next_page: 'Setup',
    previous_page: 'Parse'
  };

  let props2 = {
    title: 'Car Alarm',
    style: button,
    next_page: 'Setup',
    previous_page: 'Parse'
  };

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
        In this step you will give your OBDII the ability to roll down
        your car windows and turn on your car alarm in the case of a 
        emergency. First click the "Windows" button and then roll down your windows. 
        Wait for confirmation and then do the exact same with your car alarm. Once
        complete your OBDII will be almost completely ready to go!
      </Text>
      <HorizontalLine {...line_props} />
      <Text style={styles.instruction_text}> Press button and then lower windows </Text>
      <NavigationButton {...props1} />
      <Text style={styles.instruction_text}> Press button and then turn on alarm </Text>
      <NavigationButton {...props2} />
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
  }
})

const button = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 300,
    alignItems: 'center'
  },
  button_text: {
    fontWeight: 'bold',
  },
});

export default ParseScreen;