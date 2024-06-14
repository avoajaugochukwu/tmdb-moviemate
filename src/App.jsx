import Homepage from "./pages/Homepage";
import MovieLists from "./pages/MovieLists";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Moviedetails from "./pages/Moviedetails";
import PageNotFound from "./pages/PageNotFound";

// you are using this to add margin to the left "lg:ml-20 sm:ml-[15px]" which is bad practise,
// you should use left and right margin or padding. I prefer padding (px-20) on the out most div,
// and make it uniform

// I am putting the margin for the entire app here so that we can manage it from one place: "px-5 md:px-20"

const App = () => {
  return (
    <div className="px-5 md:px-20">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MovieLists />} />
          <Route path="/movie/:movieId" element={<Moviedetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
