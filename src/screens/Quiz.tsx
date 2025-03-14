import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import QuizComponent from '../components/QuizComponent';
import Button from '../components/Button';
import {QuizProps} from '../../Types/types';
import quizData from '../data/Quizes';
import useQuizStore from '../../store';
import CustomButton from '../components/OptionButton';
import QuizFinished from './QuizFinished';
import styles from '../styles';
// Main Quiz component
const Quiz: React.FC<QuizProps> = ({navigation}) => {
  const {
    selectedAnswer,
    currentQuestionIndex,
    score,
    isAnswerSubmitted,
    setCurrentQuestionIndex,
    resetQuestion,
    resetQuiz,
  } = useQuizStore();

  const isQuizFinished = currentQuestionIndex >= quizData.length;

  const navigateToNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      resetQuestion();
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(quizData.length); // Mark as finished
    }
  };

  // When all questions are answered, show results screen
  if (isQuizFinished) {
    return <QuizFinished navigation={navigation} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>
        Question {currentQuestionIndex + 1} of {quizData.length}
      </Text>

      <QuizComponent question={quizData[currentQuestionIndex]} />

      {isAnswerSubmitted && (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackText}>
            {selectedAnswer === quizData[currentQuestionIndex].correctAnswer
              ? 'Correct! Well done.'
              : `Incorrect. The correct answer is ${quizData[currentQuestionIndex].correctAnswer}.`}
          </Text>
          <View style={styles.nextButtonContainer}>
            <CustomButton
              text="Next Question"
              onPress={navigateToNext}
              isSelected={true}
              isCorrect={null}
              disabled={false}
            />
          </View>
        </View>
      )}
    </View>
  );
};
export default Quiz;
