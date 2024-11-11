import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {CharacterListStackNavigationProp} from '../../CharacterList.routes';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<CharacterListStackNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Implement CharactersListScreen</Text>
      <Button
        title="Navigate to Details screen"
        onPress={(): void => {
          navigate('CharacterDetailsStack', {
            screen: 'CharacterDetailsScreen',
          });
        }}
      />
    </View>
  );
};

export default CharacterListScreen;
