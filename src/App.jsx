import Homepage from "./components/Pages/Homepage";
import MovieLists from "./components/Pages/MovieLists";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Moviedetails from "./components/Pages/Moviedetails";
import PageNotFound from "./components/Pages/PageNotFound";

const App = () => {
  return (
    <div className="justify-center items-center">
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
