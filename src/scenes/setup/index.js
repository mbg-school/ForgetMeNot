import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {UserContext} from 'utils/UserDataContext';
import {SaveData} from 'utils/storage';
import {Styles} from 'styles/index';

const SetupScreen = ({navigation}) => {
  React.useEffect(() =>
    navigation.addListener('beforeRemove', (e) => {
      if (prev === 'Parse') {
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
    style: styles.text_input,
    onChangeText: (name) => setFirstName(name),
  };

  let input_props2 = {
    placeholder: 'Last Name',
    style: styles.text_input,
    onChangeText: (name) => setLastName(name),
  };

  let input_props3 = {
    placeholder: 'Car Make',
    style: styles.text_input,
    onChangeText: (make) => setCarMake(make),
  };

  let input_props4 = {
    placeholder: 'Car Model',
    style: styles.text_input,
    onChangeText: (model) => setCarModel(model),
  };

  let input_props5 = {
    placeholder: 'Car Year',
    style: styles.text_input,
    onChangeText: (year) => setCarYear(year),
  };

  const checkValid = () => {
    for (value in userData) {
      if (userData[value] === '') {
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
      if (prev === 'Parse') {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Configuration');
      }
    } else {
      Alert.alert('1 or more inputs left blank');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.first_header}>General Information</Text>
      <TextInput {...input_props1} />
      <TextInput {...input_props2} />
      <TextInput {...input_props3} />
      <TextInput {...input_props4} />
      <TextInput {...input_props5} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.button_text}>Submit</Text>
      </TouchableOpacity>
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
    alignSelf: 'flex-start',
    margin: 10,
    marginLeft: 45,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    marginVertical: 10,
  },
  button: {
    ...Styles.ButtonStyle,
  },
  button_text: {
    fontWeight: 'bold',
  },
});

export default SetupScreen;
