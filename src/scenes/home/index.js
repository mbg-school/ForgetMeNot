import React, {useContext, useState} from 'react'; 
import {StatusContext} from 'utils/StatusContext';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      })
  );

  const {currentStatus, setCurrentStatus} = useContext(StatusContext);

  const handlePress = () => {
    const updated_list = {list: [...currentStatus.list, 'new alert']};
    setCurrentStatus(updated_list);
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title = 'Update List'
        onPress = {handlePress}
      />
    </View>
  );
}

export default HomeScreen;