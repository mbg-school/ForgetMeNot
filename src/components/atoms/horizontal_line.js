import React from 'react';
import {StyleSheet, View} from 'react-native';

const HorizontalLine = (props) => {

  const imported = props.style; 
  const joined_style = StyleSheet.compose(styles.lineStyle, imported)

  return (
    <View style={joined_style} />
  );
}

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10
  }
});

export default HorizontalLine;