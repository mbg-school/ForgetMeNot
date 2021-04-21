import React, {useContext} from 'react';
import {UserContext} from 'utils/UserDataContext';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

const ConfigurationScreen = () => {
  const {userData} = useContext(UserContext);

  const Data = [
    {
      label: 'First Name:',
      title: userData.firstName,
    },
    {
      label: 'Last Name:',
      title: userData.lastName,
    },
    {
      label: 'Car Make:',
      title: userData.carMake,
    },
    {
      label: 'Car Model:',
      title: userData.carModel,
    },
    {
      label: 'Car Year:',
      title: userData.carYear,
    },
  ];

  return (
    // <View style={styles.container}>
    //   <Text style={styles.header}>User Information</Text>
    //   <Text style={styles.text}>
    //     <Text style={styles.label}>Car Make: </Text>
    //     {userData.carMake}
    //   </Text>
    //   <Text style={styles.text}>
    //     <Text style={styles.label}>Car Model: </Text>
    //     {userData.carModel}
    //   </Text>
    //   <Text style={styles.text}>
    //     <Text style={styles.label}>Car Year: </Text>
    //     {userData.carYear} {'\n'}
    //   </Text>
    // </View>
    <View>
      <Text style={styles.header}>User Profile</Text>
      {Data.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>
              {l.label} {l.title}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default ConfigurationScreen;
