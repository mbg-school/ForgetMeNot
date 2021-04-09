import React, {useContext, useState} from 'react'; 
import {StatusContext} from 'utils/StatusContext';
import {UserContext} from 'utils/UserDataContext'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Styles} from 'styles/index';
import {HorizontalLine} from 'atoms/index';

const HomeScreen = ({navigation}) => {

  const {currentStatus} = useContext(StatusContext);
  const {userData} = useContext(UserContext);
  const [userName, setUserName] = useState(userData.firstName);

  React.useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    }),
    setUserName(userData.firstName);
  }, []);

  let status = 'No current alerts.';
  let status_length = currentStatus.list.length;
  let isStatus = false; 
  let plural = 'minute'; 

  if (userData.timeSetting !== 1) 
    plural = 'minutes'; 

  if (status_length !== 0) {
    status = 'You have ' + status_length + ' alerts!';
    isStatus = true; 
  }

  const RespondButton = () => {
    return (
      <TouchableOpacity
        onPress = {() => navigation.navigate('Status')}
        style = {styles.button}
      >
        <Text style = {styles.button_text}>Respond </Text>
      </TouchableOpacity>
    )
  }

  function CheckStatus() {
    if (isStatus) {
      return <RespondButton />
    } else {
      return <View></View>
    }
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Hello, {userName}!</Text>
      <Text style = {styles.header}>Alerts</Text>
      <View style = {styles.row}> 
        <Text style = {styles.text}>{status}</Text>
        <CheckStatus />
      </View>
      <HorizontalLine style = {styles.line} />
      <Text style = {styles.header}>General Information</Text>
    <View style = {styles.row}>
        <Text style = {styles.text}>Current time before action is taken: </Text>
        <Text style = {styles.text}>{userData.timeSetting} </Text>
    </View>
    <HorizontalLine style = {styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  title: {
    flex: .15,
    ...Styles.HeaderStyle,
    //alignSelf: 'center'
  },
  header: {
    ...Styles.HeaderStyle,
    marginVertical: 10
  },
  row: {
    flexDirection: 'row'
  },
  button: {
    ...Styles.ButtonStyle,
    width: 100,
    marginLeft: 10
  },
  button_text: {
    ...Styles.ButtonTextStyle,
  },
  text: {
    ...Styles.TextSyle,
    marginTop: 10,
    fontSize: 16
  },
  line: {
    marginLeft: 0,
    borderWidth: .5,
    width: 370
  }
})

export default HomeScreen;