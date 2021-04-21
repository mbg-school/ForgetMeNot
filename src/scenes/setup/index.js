import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {UserContext} from 'utils/UserDataContext';
import {SaveData} from 'utils/storage';
import {Styles} from 'styles/index';
import {
  Button,
  ThemeProvider,
  Input,
  Header,
  Icon,
} from 'react-native-elements';
import {Theme} from 'atoms/index';

const SetupScreen = ({navigation}) => {
  React.useEffect(() =>
    navigation.addListener('beforeRemove', (e) => {
      if (prev === 'Welcome') {
        e.preventDefault();
      }
    }),
  );

  const {userData, setUserData} = useContext(UserContext);
  const route = useRoute();
  const prev = route.params.name;
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [carMake, setCarMake] = useState(userData.carMake);
  const [carModel, setCarModel] = useState(userData.carModel);
  const [carYear, setCarYear] = useState(userData.carYear);

  var value;
  var valid = true;

  let data = {
    firstName: firstName,
    lastName: lastName,
    carMake: carMake,
    carModel: carModel,
    carYear: carYear,
  };

  let input_props1 = {
    placeholder: 'First Name',
    onChangeText: (name) => setFirstName(name),
  };

  let input_props2 = {
    placeholder: 'Last Name',
    onChangeText: (name) => setLastName(name),
  };

  let input_props3 = {
    placeholder: 'Car Make',
    onChangeText: (make) => setCarMake(make),
  };

  let input_props4 = {
    placeholder: 'Car Model',
    onChangeText: (model) => setCarModel(model),
  };

  let input_props5 = {
    placeholder: 'Car Year',
    onChangeText: (year) => setCarYear(year),
  };

  const checkValid = () => {
    for (value in data) {
      if (data[value] === '') {
        valid = false;
      }
      break;
    }
  };

  const checkValue = () => {
    for (value in data) {
      if (data[value] === '') {
        data[value] = userData[value];
      }
    }
  };

  const handlePress = () => {
    checkValue();
    setUserData(data);
    SaveData(data);
    checkValid();
    if (valid) {
      navigation.navigate('Home');
    } else {
      Alert.alert('1 or more inputs left blank');
    }
  };

  const handleArrow = () => {
    navigation.navigate('Home');
  };

  const ButtonConfig = () => {
    if (prev === 'Welcome') {
      return <Button title="Next Page" onPress={handlePress} />;
    } else {
      return <Button title="Submit" onPress={handlePress} />;
    }
  };

  const CheckIcon = () => {
    if (prev !== 'Welcome') {
      return <Icon name="arrow-left" onPress={handleArrow} />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Header
        placement="center"
        leftComponent={<CheckIcon />}
        centerComponent={{text: 'User Information', style: {fontSize: 20}}}
      />
      <Text>{'\n'}</Text>
      <Input {...input_props1} />
      <Input {...input_props2} />
      <Input {...input_props3} />
      <Input {...input_props4} />
      <Input {...input_props5} />
      <Text>{'\n'}</Text>
      <ThemeProvider theme={Theme}>
        <ButtonConfig />
      </ThemeProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  first_header: {
    fontSize: 20,
  },
  button: {
    ...Styles.ButtonStyle,
  },
  button_text: {
    fontWeight: 'bold',
  },
});

export default SetupScreen;
