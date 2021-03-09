import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native';
import {NavigationButton, HorizontalLine} from 'atoms/index.js';
import {Colors} from 'styles/index.js';

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
    next_page: 'Setup'
  };

  let props2 = {
    title: 'Car Alarm',
    style: button,
    next_page: 'Setup'
  };

  let line_props = {
    style: styles.line_style
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Parse
      </Text>
      <HorizontalLine {...line_props} />
      <Text style={styles.body_text}>
        We will now set your OBDII to work with your car!
      </Text>
      <Text style={styles.instruction_text}> Roll down windows and press windows button </Text>
      <NavigationButton {...props1} />
      <Text style={styles.instruction_text}> Turn on car alarm and press car alarm button </Text>
      <NavigationButton {...props2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY
  },
  header: {
    flex: .1,
    alignSelf: 'baseline',
    fontWeight: 'bold',
    fontSize: 36
  },
  body_text: {
    marginTop: 50,
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
    width: 500
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