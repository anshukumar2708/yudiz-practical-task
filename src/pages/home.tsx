import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Link
          to="/quiz"
          className="bg-blue-300 px-8 py-3 text-lg rounded-lg hover:bg-white hover:text-blue-700 border-2 border-blue-300"
        >
          Let's Start The Quiz
        </Link>
      </div>
    </>
  );
};

export default Home;
