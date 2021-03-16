import React from 'react';
import {Text, FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Styles} from 'styles/index';

const Data = [
  {
    title: 'Configuration',
    button_name: 'Profile'
  },
  {
    title: 'About',
    button_name: 'About'
  }
];

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.button_text}>{item.button_name}</Text>
  </TouchableOpacity>
);

const MoreScreen = ({navigation}) => {

  const renderItem = ({item}) => {
    return (
      <Item
        item = {item}
        onPress = {() => navigation.navigate(item.title)}
      />
    )
  };

  return (
    <View style = {styles.container}>
      <FlatList
        data = {Data}
        renderItem = {renderItem}
        keyExtractor = {(item) => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    backgroundColor: '#FFFACD',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10
  },
  button_text: {
    fontSize: 24,
    ...Styles.ButtonTextStyle
  }
})

export default MoreScreen;


