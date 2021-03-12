import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationButton = (props) => {

  const navigation = useNavigation();
  const imported = props.style;
  const button_style = StyleSheet.compose(styles.button, imported.button);
  const text_style = StyleSheet.compose(styles.text, imported.button_text);

  return (
    <TouchableOpacity 
    style={button_style}
    onPress={() => {navigation.navigate(props.next_page, {name:props.previous_page})}}
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
  },
  text: {
    fontWeight: 'bold'
  }
});
export default NavigationButton;