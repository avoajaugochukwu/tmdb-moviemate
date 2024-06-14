import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
// import "../../src/Styles/moviedetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import useStore from "../store";
import "../../src/Styles/header.css";
import Header from "../components/Layouts/Header";
import Button from "../components/Button";

const Moviedetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const {
    data: movieDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieDetails", movieId],

    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=11eec6b26256cd542c6f92ff289594c5`
      ).then((res) => res.json()), //fetching data from tmdb api
  });

  const favoriteMovies = useStore((state) => state.favoriteMovies);

  const toggleFavoriteMovie = useStore((state) => state.toggleFavoriteMovie);

  if (isLoading) {
    return (
      <div className="text-white">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-600 font-light text-lg">Something went wrong</p>
    );
  }
  // I removed this check '{movieDetails && ()}', in some cases like if you are dealing with a list, it might be needed
  // but in this case, it is not needed, because you have checked for error and loading
  // I am willing to take the risk that movieDetails will not be null

  // Most times you don't need 'flex flex-col' because items are already stacked vertically

  const isFavorite = favoriteMovies.includes(movieDetails.id);
  const heartClass = `cursor-pointer h-8 w-7 mr-5 ${
    isFavorite ? "text-secondary-200" : "text-secondary-400"
  }`;

  return (
    <>
      <Header />
      <h1 className="text-center font-medium text-5xl my-6">
        {movieDetails.title}
      </h1>
      {/* ---------------- */}
      <div className="mx-auto w-3/4 border flex rounded-md">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="w-1/2 rounded-l-md"
        />
        {/* -- */}
        <div className="w-1/2 p-10 text-gray-500">
          <p className="text-xl font-extralight">{movieDetails.overview}</p>
          {/*  */}
          <div className="flex justify-between my-5 text-xs">
            <div className="flex gap-1">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500 mt-[1px]"
              />
              <span className="text-red-500">{movieDetails.vote_average}</span>
              <span>({movieDetails.vote_count}+)</span>
            </div>
            {/* ---- */}
            <div>
              <p>{movieDetails.release_date}</p>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between mt-10">
            <p className="text-sm text-purple-600 mt-2">
              {movieDetails.genres.map((genre) => genre.name).join(", ")}
            </p>
            {/*  */}
            <FontAwesomeIcon
              icon={faHeart}
              className={heartClass}
              onClick={() => toggleFavoriteMovie(movieDetails.id)}
            />
          </div>
        </div>
      </div>
      <div className="my-20">
        <Button variant="primary" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </div>
    </>
  );
};

export default Moviedetails;
