import React, { useState } from "react";
import { questions } from "../utils";
import Score from "../components/score";
import MultiChoiceQuestion from "../components/multiChoiceQuestion";
import PreviousNextButton from "../components/previousNextButton";

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelection = (optionIndex: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    const correctAnswers = questions.filter(
      (q, index) => q.correctAnswer === selectedAnswers[index]
    );
    return (correctAnswers.length / questions.length) * 100;
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-blue-800 to-purple-900 flex items-center justify-center p-4 text-white">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 text-black">
          {!isSubmitted ? (
            <>
              <h1 className="text-2xl font-bold text-center mb-6">
                Question {currentQuestionIndex + 1}/{questions.length}
              </h1>
              <p className="text-lg font-semibold mb-4">
                {questions[currentQuestionIndex].question}
              </p>
              <MultiChoiceQuestion
                handleAnswerSelection={handleAnswerSelection}
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                selectedAnswers={selectedAnswers}
              />
              <PreviousNextButton
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                questions={questions}
                setIsSubmitted={setIsSubmitted}
              />
            </>
          ) : (
            <Score calculateScore={calculateScore} />
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
