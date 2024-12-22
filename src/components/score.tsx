import { Link } from "react-router-dom";

interface IProps {
  calculateScore: () => number;
}
const Score = ({ calculateScore }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl font-bold">Your Score</h1>
        <p className="text-2xl font-semibold">{calculateScore()}%</p>
      </div>
      <Link
        to="/"
        className="bg-blue-300 px-8 py-2 text-lg rounded-lg hover:bg-white hover:text-blue-700 border-2 border-blue-300"
      >
        Home
      </Link>
    </div>
  );
};

export default Score;
