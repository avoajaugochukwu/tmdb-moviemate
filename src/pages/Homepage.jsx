/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Header from "../components/Layouts/Header";
import "../../src/Styles/homepage.css";
import Poster from "../components/Layouts/Poster";
import Button from "../components/Button";

// you are using this to add margin to the left "lg:ml-20 sm:ml-[15px]" which is bad practise,
// you should use left and right margin or padding. I prefer padding (px-20) on the out most div,
// and make it uniform

const Homepage = () => {

  return (
    <>
      <Header />
      {/* <main className="px-20 flex flex-col h-screen w-screen bg-primary"> */}{" "}
      {/* Avoid unnecessary classes */}
      {/* <div className="home-text lg:text-8xl sm:text-6xl font-semibold text-secondary-200 lg:ml-20 sm:ml-[15px]"> */}
      <main className="mt-10 mb-20 flex">
        <div className="w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-7xl mt-36">
            Learn more about your favourite movies
          </h1>
          {/*  */}
          <div className="mt-10 flex gap-8">
            <Link to={"/movies"}>
              <Button variant="primary">Get Started</Button>
            </Link>
            <Link to={"/movies"}>
              <Button variant="outline">I am feeling lucky</Button>
            </Link>
          </div>
        </div>
        {/* -------------------------------------------------- */}
        <div className="w-1/2">
          {/* https://tailwindcss.com/docs/grid-column */}
          <div className="grid grid-cols-6 gap-1">
            <div className="col-start-1 col-span-3">
              <Poster movieId={183} />
            </div>
            <div className="col-start-1 col-end-3"></div>
            <div className="col-end-7 col-span-3">
              <Poster movieId={20} />
            </div>
          </div>
        </div>
      </main>
      {/* ------------- */}
      {/* <main className="px-5 md:px-20">
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
      </main> */}
    </>
  );
};

export default Homepage;
