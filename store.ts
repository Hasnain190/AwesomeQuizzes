import {create} from 'zustand';
import quizData from '../AwesomeQuizzes/src/data/Quizes';

// Define Zustand store
interface QuizStore {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  isAnswerSubmitted: boolean;
  setCurrentQuestionIndex: (index: number) => void;
  setScore: (score: number) => void;
  selectAnswer: (answer: string) => void;
  submitAnswer: () => void;
  resetQuestion: () => void;
  resetQuiz: () => void;
}

const useQuizStore = create<QuizStore>((set, get) => ({
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswer: null,
  correctAnswer: 0,
  isAnswerSubmitted: false,
  selectAnswer: (answer: string) => set({selectedAnswer: answer}),
  setCurrentQuestionIndex: (index: number) =>
    set({currentQuestionIndex: index}),
  setScore: (score: number) => set({score: score}),

  submitAnswer: () => {
    const {selectedAnswer, currentQuestionIndex, score} = get();
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
      set({score: score + 1});
    }

    set({isAnswerSubmitted: true});
  },

  resetQuestion: () =>
    set({
      selectedAnswer: null,
      isAnswerSubmitted: false,
    }),

  resetQuiz: () =>
    set({
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswer: null,
      isAnswerSubmitted: false,
    }),
}));

export default useQuizStore;
