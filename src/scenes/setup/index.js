import React, {useState, useContext} from 'react'; 
import {View, Text, TextInput, StyleSheet, Picker, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {UserContext} from 'utils/UserDataContext';
import {SaveData} from 'utils/storage';

const SetupScreen = ({navigation}) => {

  const {setUserData} = useContext(UserContext);
  const route = useRoute(); 
  const prev = route.params.name; 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState(''); 
  const [carYear, setCarYear] = useState('');
  const [timeSetting, setTimeSetting] = useState('');

  let data = {
    firstName: firstName,
    lastName: lastName,
    carMake: carMake,
    carModel: carModel,
    carYear: carYear,
    timeSetting: timeSetting.toString(),
};

  let next_page = 'Home';

  let input_props1 = {
    placeholder: 'First Name',
    style: styles.text_input,
    onChangeText: (firstName) => setFirstName(firstName)
  }

  let input_props2 = {
    placeholder: 'Last Name',
    style: styles.text_input,
    onChangeText: (lastName) => setLastName(lastName)
  }

  let input_props3 = {
    placeholder: 'Car Make',
    style: styles.text_input,
    onChangeText: (carMake) => setCarMake(carMake)
  }

  let input_props4 = {
    placeholder: 'Car Model',
    style: styles.text_input,
    onChangeText: (carModel) => setCarModel(carModel)
  }

  let input_props5 = {
    placeholder: 'Car Year',
    style: styles.text_input,
    onChangeText: (carYear) => setCarYear(carYear)
  }

  let picker_props = {
    selectedValue: timeSetting,
    mode: 'dropdown',
    propmt: 'Time Choice',
    onValueChange: (timeSetting) => setTimeSetting(timeSetting),
    style: styles.text_input
  }

  if (prev === 'Configuration') next_page = 'Configuration';

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (prev === 'Parse')
          e.preventDefault();
      })
  );

  const handlePress = () => {
    setUserData(data);
    SaveData(data);
    if (prev === 'Parse')
      navigation.navigate('Home');
    else 
      navigation.navigate('Configuration');
  };

  return (
    <View style = {styles.container}>
      <Text style = {styles.first_header}>General Information</Text>
      <TextInput         
        {...input_props1}
      />
      <TextInput 
        {...input_props2}
      />
      <TextInput 
        {...input_props3}
      />
      <TextInput 
        {...input_props4}
      />
      <TextInput 
        {...input_props5}
      />
      <Text style = {styles.first_header}>Emergency time setting</Text>
      <Picker
        {...picker_props}
        >
        <Picker.Item label = 'Please Choose a Time' value = {0}/>
        <Picker.Item label = '1 Minute' value = {1}/>
        <Picker.Item label = '2 Minutes' value = {2}/>
        <Picker.Item label = '5 Minutes' value = {5}/>
        <Picker.Item label = '10 Minutes' value = {10}/>
      </Picker>
      <TouchableOpacity
        style = {styles.button}
        onPress={handlePress}
      >
        <Text style = {styles.button_text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    fontSize: 20
  },
  text_input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    marginVertical: 10
  },
  button: {
    borderWidth: 1,
    backgroundColor: "#FFFACD",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    elevation: 4,
    width: 300,
    alignItems: 'center',
  },
  button_text: {
    fontWeight: 'bold',
  }
});

export default SetupScreen;