import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../components/OptionButton';
import useQuizStore from '../../store';
import quizData from '../data/Quizes';
import {QuizNavigationProp} from '../../Types/types';
// import {QuizFinishedProps} from '../../Types/types';
import styles from '../styles';
const QuizFinished: React.FC<any> = ({navigation}) => {
  const {score, resetQuiz} = useQuizStore();

  return (
    <View style={styles.resultsContainer}>
      <Text style={styles.resultTitle}>Quiz Completed!</Text>
      <Text style={styles.resultScore}>
        Your score: {score} out of {quizData.length}
      </Text>
      <View style={styles.restartButtonContainer}>
        <CustomButton
          text="Restart Quiz"
          onPress={resetQuiz}
          isSelected={true}
          isCorrect={null}
          disabled={false}
        />
      </View>
      <View style={styles.homeButtonContainer}>
        <CustomButton
          text="Back to Home"
          onPress={() => navigation.navigate('Menu')}
          isSelected={false}
          isCorrect={null}
          disabled={false}
        />
      </View>
    </View>
  );
};
export default QuizFinished;
