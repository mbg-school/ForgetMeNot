import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Countdown from 'react-native-countdown-component';

const FunctionalButton = (props) => {

  const [run, setRun] = React.useState(false);

  function handleClick() {
    setRun = true; 
  }

  const imported = props.style;
  const button_style = StyleSheet.compose(styles.button, imported.button);
  const text_style = StyleSheet.compose(styles.text, imported.button_text)

  return (
    <TouchableOpacity 
    style={button_style}
    onPress={() => {navigation.navigate(props.next_page)}}
    >
      <Text style={text_style}>{props.title}</Text>
    </TouchableOpacity>
  );

};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFACD",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    fontWeight: 'bold'
  }
});
export default FunctionalButton;