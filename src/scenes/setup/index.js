import React from 'react'; 
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {NavigationButton} from 'atoms/index.js';

const SetupScreen = ({navigation}) => {

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      })
  );

  let button_props = {
    title: 'Begin Pairing',
    next_page: 'Home',
    style: button 
  };

  let input_props1 = {
    placeholder: 'First Name'
  }

  let input_props2 = {
    placeholder: 'Last Name'
  }

  let input_props3 = {
    placeholder: 'Time'
  }

  return (
    <View>
      <Text>Setup Screen</Text>
      <TextInput 
        style={styles.text_input}
        {...input_props1}
      />
      <TextInput 
        style={styles.text_input}
        {...input_props2}
      />
      <TextInput 
        style={styles.text_input}
        {...input_props3}
      />
      <NavigationButton {...button_props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text_input: {
    borderWidth: 1,
    borderColor: 'black',
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

export default SetupScreen;