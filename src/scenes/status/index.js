import React, {useState, useContext} from 'react';
import {StatusContext} from 'utils/StatusContext';
import {
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {Styles} from 'styles/index';

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.button_text}>{item.title}</Text>
  </TouchableOpacity>
);

const StatusScreen = () => {
  const {currentStatus, setCurrentStatus} = useContext(StatusContext);
  const {currentData, setCurrentData} = useState(currentStatus.list);

  if (currentStatus !== null) {
    currentStatus.list.map((alert) => {
      currentData.push({title: alert});
    });

    setCurrentData(currentData);
  }

  const removeItem = (item) => {
    let arr = currentStatus.list;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item.title) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };

  const handleTurnOff = (item) => {
    Alert.alert('Alert removed and responded too!');
    let updatedStatus = {list: removeItem(item)};
    setCurrentStatus(updatedStatus);
  };

  const handlePress = (item) =>
    Alert.alert(item.title, 'How would you to respond to the alert?', [
      {
        text: 'Turn off',
        onPress: () => handleTurnOff(item),
        style: 'default',
      },
      {
        text: 'No',
        onPress: () => Alert.alert('Alert still active!'),
        style: 'cancel',
      },
    ]);

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => handlePress(item)} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Current Alerts</Text>
      <FlatList
        data={currentData}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  button_text: {
    ...Styles.ButtonTextSyle,
    fontSize: 16,
  },
  header: {
    ...Styles.HeaderStyle,
    marginTop: 20,
    fontSize: 32,
  },
});

export default StatusScreen;
