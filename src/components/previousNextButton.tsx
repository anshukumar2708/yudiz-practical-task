interface question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}
interface IProps {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  questions: question[];
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreviousNextButton = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  questions,
  setIsSubmitted,
}: IProps) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={() =>
          setCurrentQuestionIndex((prev: number) => Math.max(prev - 1, 0))
        }
        className="px-4 py-2 bg-gray-300 text-black rounded-lg disabled:opacity-50"
        disabled={currentQuestionIndex === 0}
      >
        Previous
      </button>
      {currentQuestionIndex < questions.length - 1 ? (
        <button
          onClick={() =>
            setCurrentQuestionIndex((prev: number) =>
              Math.min(prev + 1, questions.length - 1)
            )
          }
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Next
        </button>
      ) : (
        <button
          onClick={() => setIsSubmitted(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default PreviousNextButton;
