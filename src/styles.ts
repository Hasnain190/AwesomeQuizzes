import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 100,
    marginTop: 100,
    color: '#212121',
    alignSelf: 'center',
  },
  progressText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#757575',
  },
  quizContainer: {
    width: '100%',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 1,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#212121',
  },
  submitButtonContainer: {
    marginTop: 15,
  },
  feedbackContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  feedbackText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    color: '#212121',
  },
  nextButtonContainer: {
    marginTop: 10,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#212121',
  },
  resultScore: {
    fontSize: 18,
    marginBottom: 30,
    color: '#424242',
  },
  restartButtonContainer: {
    width: '80%',
    marginBottom: 15,
  },
  homeButtonContainer: {
    width: '80%',
  },
});

export default styles;
