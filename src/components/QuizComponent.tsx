import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Question from './Question';
import Button from './Button';
import {QuizQuestion} from '../../Types/quiz';
import useQuizStore from '../../store';
import CustomButton from './OptionButton';

import styles from '../styles';
// Updated QuizComponent to accept props
type QuizComponentProps = {
  question: QuizQuestion;
};

function QuizComponent({question}: QuizComponentProps) {
  const {selectedAnswer, isAnswerSubmitted, selectAnswer, submitAnswer} =
    useQuizStore();

  const handleOptionPress = (option: string) => {
    if (!isAnswerSubmitted) {
      selectAnswer(option);
    }
  };

  return (
    <View style={styles.quizContainer}>
      <Question text={question.question} />

      {question.options.map((option, index) => {
        const isSelected = selectedAnswer === option;
        let isCorrect = null;

        if (isAnswerSubmitted && isSelected) {
          isCorrect = option === question.correctAnswer;
        } else if (isAnswerSubmitted && option === question.correctAnswer) {
          isCorrect = true; // Always show correct answer when submitted
        }

        return (
          <CustomButton
            key={index}
            text={option}
            onPress={() => handleOptionPress(option)}
            isSelected={
              isSelected ||
              (isAnswerSubmitted && option === question.correctAnswer)
            }
            isCorrect={isCorrect}
            disabled={isAnswerSubmitted}
          />
        );
      })}

      {selectedAnswer && !isAnswerSubmitted && (
        <View style={styles.submitButtonContainer}>
          <CustomButton
            text="Submit Answer"
            onPress={submitAnswer}
            isSelected={true}
            isCorrect={null}
            disabled={false}
          />
        </View>
      )}
    </View>
  );
}
export default QuizComponent;
