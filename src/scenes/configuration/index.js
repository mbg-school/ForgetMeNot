import React, {useContext} from 'react'; 
import {UserContext} from 'utils/UserDataContext';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ConfigurationScreen = ({navigation}) => {

  const {userData} = useContext(UserContext);

  const handlePress = () => {
    navigation.navigate('Setup', {name: 'Configuration'});
  }

  let plural = 'minutes'
  if (userData.timeSetting === '1') plural = 'minute'; 

  return (
    <View style = {styles.container}>
      <Text style = {styles.header}>Personal Information: {'\n'}</Text>
      <Text>First Name: {userData.firstName}</Text>
      <Text>Last Name: {userData.lastName + '\n'}</Text>
      <Text style = {styles.header}>Vehicle Information: {'\n'}</Text>
      <Text>Car Make: {userData.carMake}</Text>
      <Text>Car Model: {userData.carModel}</Text>
      <Text>Car Year: {userData.carYear + '\n'}</Text>
      <Text>Time Setting: {userData.timeSetting} {plural}</Text>
      <TouchableOpacity
        onPress={handlePress}
      >
        <Text>Edit Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default ConfigurationScreen;