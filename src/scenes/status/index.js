import React, {useContext, useState} from 'react';
import {StatusContext} from 'utils/StatusContext';
import {ListItem} from 'react-native-elements';
import {StyleSheet, View, Alert} from 'react-native';
import {Styles} from 'styles/index';

const StatusScreen = () => {
  const {currentStatus, setCurrentStatus} = useContext(StatusContext);
  const [expanded, setExpanded] = useState(false);
  const currentData = [];

  if (currentStatus !== null) {
    let unique_list = [];
    currentStatus.list.map((alert) => {
      if (!unique_list.includes(alert) && alert !== 'You have Connected') {
        currentData.push({title: alert});
        unique_list = [...unique_list, alert];
      }
    });
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

  return (
    <View>
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>Current Alerts</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        {currentData.map((l, i) => (
          <ListItem key={i} onPress={() => handlePress(l)} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: 'red',
  },
});

export default StatusScreen;
