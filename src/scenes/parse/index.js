import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {HorizontalLine} from 'atoms/index.js';
import {Styles} from 'styles/index';

const ParseScreen = ({navigation}) => {
  React.useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  });

  let line_props = {
    style: styles.line_style,
  };

  return (
    <View style={styles.container}>
      <Image source={require('assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.body_text}>
        We will now set your OBDII to work with your car! Click the button below
        to let your OBDII know it is time to start monitoring the status of your
        car.
      </Text>
      <HorizontalLine {...line_props} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Setup');
        }}>
        <Text style={styles.button_text}>Get Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    flex: 0.2,
    marginTop: -50,
    marginBottom: 20,
    height: 100,
    width: 100,
  },
  body_text: {
    flex: 0.3,
    marginBottom: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  instruction_text: {
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 16,
  },
  line_style: {
    marginHorizontal: 0,
    marginTop: 0,
    width: 350,
  },
  button: {
    ...Styles.ButtonStyle,
  },
  button_text: {
    ...Styles.ButtonTextStyle,
  },
});

export default ParseScreen;
