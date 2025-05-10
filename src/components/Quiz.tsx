import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  options: { id: string; text: string }[];
  correct: string;
}

const Quiz: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const questions: Question[] = [
    {
      id: '1',
      text: 'How are parameters passed in x86-64?',
      options: [
        { id: 'a', text: 'All parameters on stack' },
        { id: 'b', text: 'First six in registers, rest on stack' },
        { id: 'c', text: 'All parameters in registers' },
        { id: 'd', text: 'Random distribution' }
      ],
      correct: 'b'
    },
    {
      id: '2',
      text: 'How are local variables accessed?',
      options: [
        { id: 'a', text: 'Through registers only' },
        { id: 'b', text: 'Relative to base pointer on stack' },
        { id: 'c', text: 'From global memory' },
        { id: 'd', text: 'Through cache only' }
      ],
      correct: 'b'
    },
    {
      id: '3',
      text: 'What is the main difference between 32-bit and 64-bit programs?',
      options: [
        { id: 'a', text: 'Speed only' },
        { id: 'b', text: 'More register usage for parameters in 64-bit' },
        { id: 'c', text: 'No differences' },
        { id: 'd', text: 'Color display' }
      ],
      correct: 'b'
    },
    {
      id: '4',
      text: 'How is the CPU restored to its proper state?',
      options: [
        { id: 'a', text: 'Using return address on stack' },
        { id: 'b', text: 'Random jump' },
        { id: 'c', text: 'System restart' },
        { id: 'd', text: 'Manual restoration' }
      ],
      correct: 'a'
    },
    {
      id: '5',
      text: 'What happens if calling conventions are ignored?',
      options: [
        { id: 'a', text: 'Nothing' },
        { id: 'b', text: 'Program runs faster' },
        { id: 'c', text: 'Crashes or incorrect behavior' },
        { id: 'd', text: 'Better performance' }
      ],
      correct: 'c'
    }
  ];

  // Fisher-Yates shuffle algorithm
  const shuffleQuestions = (array: Question[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setShuffledQuestions(shuffleQuestions(questions));
  }, []);

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [shuffledQuestions[currentQuestion].id]: answerId
    }));
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
      if (getScore() >= 4) {
        onComplete();
      }
    }
  };

  const getScore = () => {
    return shuffledQuestions.reduce((score, question) => {
      return score + (selectedAnswers[question.id] === question.correct ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShuffledQuestions(shuffleQuestions(questions));
  };

  if (showResults) {
    const score = getScore();
    const passed = score >= 4;

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Quiz Results</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            {passed ? (
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto" />
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-4">
            {passed ? 'Quiz Completed!' : 'Keep Learning!'}
          </h3>
          
          <p className="text-xl mb-4">
            You scored {score} out of {shuffledQuestions.length}
          </p>
          
          <p className="text-gray-600">
            {passed
              ? 'You have a good understanding of calling conventions!'
              : 'Review the material and try again!'}
          </p>
          
          {!passed && (
            <button
              onClick={resetQuiz}
              className="mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    );
  }

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  const question = shuffledQuestions[currentQuestion];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Quiz</h2>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {shuffledQuestions.length}
            </span>
            <span className="text-sm font-medium text-indigo-600">
              {Math.round(((currentQuestion + 1) / shuffledQuestions.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{
                width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-6">{question.text}</h3>

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswerSelect(option.id)}
              className={`w-full p-4 text-left rounded-lg transition-colors ${
                selectedAnswers[question.id] === option.id
                  ? 'bg-indigo-100 border-2 border-indigo-500'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <span className="font-medium">{option.text}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedAnswers[question.id]}
          className={`w-full mt-6 py-3 px-6 rounded-lg transition-colors ${
            selectedAnswers[question.id]
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentQuestion < shuffledQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;