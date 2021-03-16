import React, {useContext} from 'react';
import {StatusContext} from 'utils/StatusContext'
import {Text, FlatList, StyleSheet, TouchableOpacity, View, Alert} from 'react-native';
import {Styles} from 'styles/index';


const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.button_text}>{item.title}</Text>
  </TouchableOpacity>
);

const StatusScreen = () => {

  const {currentStatus} = useContext(StatusContext);

  const Data = [];
  
  currentStatus.list.map(alert => {
    Data.push({title: alert});
  })  

  const handlePress = ({item}) => 
    Alert.alert(
      item,
      'Would you to respond to the alert?',
      [
        {
          text: 'Yes',
          onPress: () => Alert.alert('Accepted'),
          style: 'default'
        },
        {
          text: 'No',
          onPress: () => Alert.alert('Not Accepted'),
          style: 'cancel'
        }
      ]
    ) 

  const renderItem = ({item}) => {
    return (
      <Item
        item = {item}
        onPress = {(item) => handlePress(item)}
      />
    )
  };

  return (
    <View style = {styles.container}>
      <Text style = {styles.header}>Current Alerts</Text>
      <FlatList
        data = {Data}
        renderItem = {renderItem}
        keyExtractor = {(item) => item.title}
      />
      <Text style = {styles.header}>Past Alerts</Text>
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
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  button_text: {},
  header: {
    ...Styles.HeaderStyle
  }
})


export default StatusScreen;