import React, {useContext} from 'react';
import {BleContext} from 'utils/BleContext';
import {View, Text, StyleSheet, Image} from 'react-native';
import {HorizontalLine, Theme} from 'atoms/index.js';
import {Colors} from 'styles/index.js';
import {Button, ThemeProvider} from 'react-native-elements';

const WelcomeScreen = ({navigation}) => {
  const {bleConnection} = useContext(BleContext);

  const ShowButton = () => {
    if (!bleConnection) {
      return (
        <ThemeProvider theme={Theme}>
          <Button title="Next Page" onPress={handlePress} disabled={false} />
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={Theme}>
          <Button
            title="Next Page"
            onPress={handlePress}
            disabled={true}
            loading={true}
          />
        </ThemeProvider>
      );
    }
  };

  const handlePress = () => {
    navigation.navigate('Setup', {name: 'Welcome'});
  };

  let line_props = {
    style: styles.line_style,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forget-Me-Not</Text>
      <Image source={require('assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.welc_text}>
        Thank you for choosing Forget Me Not!{'\n'}
        Please follow the below instructions:{'\n'}
      </Text>
      <HorizontalLine {...line_props} />
      <Text style={styles.inst_text}>
        Plug in the provided OBDII module into the OBDII port. The port can be
        found in the bottom left area of the steering wheel. A green light on
        the module will indicate it is working. Once your phone is connected to
        the OBDII, a button will appear to take you to the next page. {'\n'}
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
    marginTop: 75,
  },
  header: {
    marginBottom: -50,
    fontWeight: 'bold',
    fontSize: 36,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
    marginTop: 50,
    backgroundColor: 'transparent',
  },
  inst_text: {
    textAlign: 'center',
    margin: 10,
    fontSize: 16,
  },
  welc_text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  line_style: {
    width: 350,
  },
});

export default WelcomeScreen;
