import React, {useContext} from 'react';
import {StatusContext} from 'utils/StatusContext';
import {UserContext} from 'utils/UserDataContext';
import {View, Text, StyleSheet} from 'react-native';
import {Styles} from 'styles/index';
import {HorizontalLine} from 'atoms/index';
import StatusScreen from 'scenes/status';
import {Header} from 'react-native-elements';

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
      return <Text>No Current Alerts.</Text>;
    }
  }

  return (
    <View style={styles.container}>
      <Header
        placement="left"
        centerComponent={{
          text: `${userData.firstName}' Home Page`,
          style: {fontSize: 20, marginLeft: -15},
        }}
      />
      <Text style={styles.header}>Alerts</Text>
      <CheckStatus />
      <HorizontalLine style={styles.line} />
      <Text style={styles.header}>General Information</Text>
      <HorizontalLine style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    flex: 0.15,
    ...Styles.HeaderStyle,
    //alignSelf: 'center'
    marginLeft: 10,
  },
  header: {
    ...Styles.HeaderStyle,
    marginVertical: 10,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    ...Styles.ButtonStyle,
    width: 100,
    marginLeft: 10,
  },
  button_text: {
    ...Styles.ButtonTextStyle,
  },
  text: {
    ...Styles.TextSyle,
    marginTop: 10,
    fontSize: 16,
  },
  line: {
    marginLeft: 0,
    borderWidth: 0.5,
    width: 370,
  },
});

export default HomeScreen;
