import {View, Text} from 'react-native';
import React from 'react';
import Button from '../components/Button';

import {MenuProps} from '../../Types/types';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles';
const Menu: React.FC<MenuProps> = ({navigation}) => {
  const navigateToQuizScreen = () => {
    navigation.navigate('Quiz');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
      <Button text="Start Quiz" onPress={navigateToQuizScreen}></Button>
    </View>
  );
};
export default Menu;
