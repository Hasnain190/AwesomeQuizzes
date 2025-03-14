import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

export default function Question({
  text, 
  questionNumber,
  totalQuestions,
}: {
  text: string;
  questionNumber?: number;
  totalQuestions?: number;
}) {
  return (
    <View style={styles.container}>
      {(questionNumber && totalQuestions) ? (
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Question {questionNumber} of {totalQuestions}</Text>
          <View style={styles.progressBarBackground}>
            <View 
              style={[
                styles.progressBar, 
                {width: `${(questionNumber / totalQuestions) * 100}%`}
              ]} 
            />
          </View>
        </View>
      ) : null}
      
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{text}</Text>
      </View>
    </View>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
    fontWeight: '500',
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3498db',
    borderRadius: 4,
  },
  questionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    width: '100%',
    alignSelf: 'center',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
    lineHeight: 26,
  },
});