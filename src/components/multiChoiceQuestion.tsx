interface question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface IProps {
  handleAnswerSelection: (optionIndex: number) => void;
  questions: question[];
  currentQuestionIndex: number;
  selectedAnswers: (number | null)[];
}

const MultiChoiceQuestion = ({
  handleAnswerSelection,
  questions,
  currentQuestionIndex,
  selectedAnswers,
}: IProps) => {
  return (
    <>
      {/* <div className="space-y-2">
      {questions[currentQuestionIndex].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswerSelection(index)}
          className={`w-full py-2 px-4 rounded-lg border transition-all ${
            selectedAnswers[currentQuestionIndex] === index
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-blue-300"
          }`}
        >
          {option}
        </button>
      ))}
    </div> */}
      <div className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions[currentQuestionIndex].options.map(
            (option, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswerSelection(index)}
                className={`w-full py-2 px-4 rounded-lg border transition-all text-left ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black hover:bg-blue-300"
                }`}
              >
                <span className="font-bold mr-2">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default MultiChoiceQuestion;
