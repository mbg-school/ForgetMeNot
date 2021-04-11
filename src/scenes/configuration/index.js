import React, {useContext} from 'react';
import {UserContext} from 'utils/UserDataContext';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Styles} from 'styles/index';

const ConfigurationScreen = ({navigation}) => {
  const {userData} = useContext(UserContext);

  const handlePress = () => {
    navigation.navigate('Setup', {name: 'Configuration'});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {userData.firstName} {userData.lastName}{' '}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Car Make: </Text>
        {userData.carMake}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Car Model: </Text>
        {userData.carModel}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Car Year: </Text>
        {userData.carYear} {'\n'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.button_text}>Edit Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  header: {
    ...Styles.HeaderStyle,
    flex: 0.1,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    ...Styles.TextStyle,
  },
  button: {
    ...Styles.ButtonStyle,
    marginTop: 10,
    width: 250,
  },
  button_text: {
    ...Styles.ButtonTextStyle,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default ConfigurationScreen;
