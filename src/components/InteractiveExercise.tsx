import React, { useState } from 'react';

const InteractiveExercise: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const exercises = [
    {
      id: '1',
      question: 'What happens first in a function prologue?',
      options: [
        { id: 'a', text: 'Save old frame pointer' },
        { id: 'b', text: 'Push return address' },
        { id: 'c', text: 'Allocate local variables' },
        { id: 'd', text: 'Set up new frame pointer' }
      ],
      correct: 'b'
    },
    {
      id: '2',
      question: 'In Windows x64, which register holds the first parameter?',
      options: [
        { id: 'a', text: 'RAX' },
        { id: 'b', text: 'RBX' },
        { id: 'c', text: 'RCX' },
        { id: 'd', text: 'RDX' }
      ],
      correct: 'c'
    },
    {
      id: '3',
      question: 'What is the main advantage of register-based parameter passing?',
      options: [
        { id: 'a', text: 'Simpler debugging' },
        { id: 'b', text: 'Better memory usage' },
        { id: 'c', text: 'Faster function calls' },
        { id: 'd', text: 'Easier stack management' }
      ],
      correct: 'c'
    }
  ];

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const getScore = () => {
    return exercises.reduce((score, exercise) => {
      return score + (selectedAnswers[exercise.id] === exercise.correct ? 1 : 0);
    }, 0);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Interactive Exercise</h2>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-8">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {exercise.question}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {exercise.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(exercise.id, option.id)}
                    className={`p-4 rounded-lg text-left transition-colors ${
                      selectedAnswers[exercise.id] === option.id
                        ? 'bg-indigo-100 border-2 border-indigo-500'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    } ${
                      showResults
                        ? option.id === exercise.correct
                          ? 'bg-green-100 border-green-500'
                          : selectedAnswers[exercise.id] === option.id
                          ? 'bg-red-100 border-red-500'
                          : ''
                        : ''
                    }`}
                  >
                    <span className="font-medium">{option.text}</span>
                  </button>
                ))}
              </div>
              {showResults && selectedAnswers[exercise.id] !== exercise.correct && (
                <p className="text-red-600 mt-2">
                  Incorrect. The correct answer has been highlighted.
                </p>
              )}
            </div>
          ))}

          {!showResults && (
            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Submit Answers
            </button>
          )}

          {showResults && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Your Score: {getScore()} / {exercises.length}
              </h3>
              <p className="text-gray-600">
                {getScore() === exercises.length
                  ? 'Perfect! You\'ve mastered these concepts.'
                  : 'Review the correct answers above and try again!'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveExercise;