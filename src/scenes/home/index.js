import React, {useContext} from 'react';
import {StatusContext} from 'utils/StatusContext';
import {UserContext} from 'utils/UserDataContext';
import {View, StyleSheet} from 'react-native';
import StatusScreen from 'scenes/status';
import MoreScreen from 'scenes/more';
import ConfigurationScreen from 'scenes/configuration';
import {Header, ListItem, Badge, Divider} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const {currentStatus} = useContext(StatusContext);
  const {userData} = useContext(UserContext);

  React.useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  });

  let status_length = currentStatus.list.length;
  let isStatus = false;

  if (status_length > 0) {
    isStatus = true;
  } else {
    isStatus = false;
  }

  function CheckStatus() {
    if (isStatus) {
      return <StatusScreen />;
    } else {
      return (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>No Current Alerts.</ListItem.Title>
          </ListItem.Content>
          <Badge status="success" />
        </ListItem>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Header
        placement="center"
        centerComponent={{
          text: `${userData.firstName}'s Home Page`,
          style: {fontSize: 24, marginLeft: -15, fontWeight: 'bold'},
        }}
      />
      <CheckStatus />
      <MoreScreen navigation={navigation} />
      <Divider style={styles.divider} />
      <ConfigurationScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  divider: {
    height: 5,
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default HomeScreen;
