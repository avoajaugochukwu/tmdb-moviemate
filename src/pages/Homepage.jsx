import { Link } from "react-router-dom";
import Headers from "../components/Layouts/Header";
import "../../src/Styles/homepage.css";
import Poster from "../components/Layouts/Poster";

const Homepage = () => {
  return (
    <>
      <Headers />
      <main className="container flex flex-col h-screen w-screen bg-primary">
        <div className="home-text lg:text-8xl sm:text-6xl font-semibold text-secondary-200 lg:ml-20 sm:ml-[15px]">
          <h1>Learn more about</h1>
          <p>your favourite</p>
          <p>movies</p>
        </div>

        <div className="getStarted-container flex gap-7 lg:ml-20 sm:ml-5 mt-5">
          <Link
            to={"/movies"}
            className="get-started text-white bg-secondary-100 py-1 px-5 text-sm shadow-inner rounded"
          >
            Get started
          </Link>

          <Link
            to={"/movies"}
            className="lucky hover:bg-secondary-100  text-secondary-200 border border-secondary-100 shadow-inner py-1 px-3 text-sm rounded"
          >
            I am feeling lucky
          </Link>
        </div>
        <div className="pb-5 bg-inherit">
          <div className="poster-1 flex justify-center lg:mt-[-90px] lg:ml-[130px] sm:mr-[50px] sm:mt-6 sm:ml-36">
            <Poster movieId={183} />
          </div>
          <div className="poster-2 flex lg:justify-end sm:justify-end lg:mr-[120px] sm:mr-10 lg:mt-0">
            <Poster movieId={20} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
