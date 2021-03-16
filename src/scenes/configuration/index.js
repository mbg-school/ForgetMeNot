import React, {useContext} from 'react'; 
import {UserContext} from 'utils/UserDataContext';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Styles} from 'styles/index'

const ConfigurationScreen = ({navigation}) => {

  const {userData} = useContext(UserContext);

  const handlePress = () => {
    navigation.navigate('Setup', {name: 'Configuration'});
  }

  let plural = 'minutes'
  if (userData.timeSetting === '1') plural = 'minute'; 

  return (
    <View style = {styles.container}>
      <Text style = {styles.header}>{userData.firstName} {userData.lastName} </Text>
      <Text style = {styles.text}>
        <Text style = {{fontWeight:'bold'}}>Car Make: </Text>
        {userData.carMake}
      </Text>
      <Text style = {styles.text}>
        <Text style = {{fontWeight:'bold'}}>Car Model: </Text>
        {userData.carModel}
      </Text>
      <Text style = {styles.text}>
        <Text style = {{fontWeight:'bold'}}>Car Year: </Text>
        {userData.carYear} {'\n'}
      </Text>
      <Text style = {styles.text}>
        <Text style = {{fontWeight:'bold'}}>Time Choice: </Text>
        {userData.timeSetting} {plural}
      </Text>
      <TouchableOpacity
        style = {styles.button}
        onPress={handlePress}
      >
        <Text style = {styles.button_text}>Edit Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },

  header: {
    ...Styles.HeaderStyle,
    flex: .1
  },

  text: {
    fontSize: 16,
    marginVertical: 5,
    ...Styles.TextStyle
  },
  button: {
    ...Styles.ButtonStyle,
    marginTop: 10,
    width: 250
  },
  button_text: {
    ...Styles.ButtonTextStyle
  }
})

export default ConfigurationScreen;