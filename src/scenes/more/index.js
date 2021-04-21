import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Styles} from 'styles/index';
import {ListItem} from 'react-native-elements';

const MoreScreen = ({navigation}) => {
  const Data = [
    {
      title: 'Setup',
      button_name: 'Edit Profile',
    },
    {
      title: 'About',
      button_name: 'About',
    },
  ];

  const handlePress = (item) => {
    if (item.title === 'Setup') {
      navigation.navigate(item.title, {name: 'Home'});
    } else {
      navigation.navigate(item.title);
    }
  };

  return (
    <View>
      {Data.map((l, i) => (
        <ListItem key={i} onPress={() => handlePress(l)} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.list}>{l.button_name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    fontSize: 20,
  },
  button_text: {
    fontSize: 24,
    ...Styles.ButtonTextStyle,
  },
});

export default MoreScreen;
