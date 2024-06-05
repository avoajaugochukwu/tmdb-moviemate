import { useQuery } from "@tanstack/react-query"
import useStore from "../store"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"
import "../Styles/movieLists.css"
import Header from "../Layouts/Header"

const MovieLists = () => { 

  const { data, isLoading, error} = useQuery({
    queryFn: () => 
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=11eec6b26256cd542c6f92ff289594c5").then((res) => res.json()
  ), 
  queryKey: ["movies"],
  refetchOnWindowFocus: true,
  refetchOnMount: true,
  refetchOnReconnect: true,
  staleTime: 1000 * 60 * 15,
  });

  const favoriteMovies = useStore((state) => state.favoriteMovies);
  const toggleFavoriteMovie = useStore((state) => state.toggleFavoriteMovie);
  const { searchTerm, setSearchTerm } = useStore((state) => ({searchTerm: state.searchTerm, setSearchTerm: state.setSearchTerm}));
  
  const displayTenMovies = data?.results?.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 10)

  if (isLoading) {
    return <div className='text-white'>
    <span className="loading loading-spinner loading-xs"></span>
    <span className="loading loading-spinner loading-sm"></span>
    <span className="loading loading-spinner loading-md"></span>
    <span className="loading loading-spinner loading-lg"></span>
  </div>
  } 

  if (error) {
    return <p className="text-red-600">Something went wrong</p>
  } 

  return (
    <main className=" min-h-screen min-w-full pb-10 bg-[#f5f5f5]">
      <Header />
      <div className="flex justify-center flex-col items-center ml-5">
      <h1 className="text-black font-extrabold text-2xl mt-3">Movie Lists</h1>
      <div className="relative">
        <FontAwesomeIcon icon={faSearch} className="text-[#9FA9B4] absolute top-[28%] left-[190px] h-6" />
      <input type="text" placeholder="Search movies" className="outline bg-white rounded-xl px-5 py-1 my-3 shadow-xl" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
        
      </div>
    
      <div className="movie-lists container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-5 ml-3 mr-5 justify-center place-items-center">
      {displayTenMovies.length === 0 && <p className="text-black text-center col-span-full font-semibold text-2xl">Movie not found</p>}
        {displayTenMovies?.map((movie) => (
        <div key={movie.id} data-theme="dim" className="movie-conrtainer justify-center grid p-3 w-[280px] h-[300px] mx-3 my-3">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-[250px] h-[200px] rounded-sm" />
          <div className="grid grid-cols-2">
          <Link to={`/movie/${movie.id}`} className="details-button bg-white text-sm text-[#2A303C] w-[100px] h-[30px] text-center pt-1 ml-5 mt-3  rounded-md">
            View details
          </Link>
         <button onClick={() => toggleFavoriteMovie(movie.id)}> 
         <FontAwesomeIcon icon={faHeart} className={` h-8 w-10 mr-4 
         ${favoriteMovies.includes(movie.id) ? "text-red-600" : "text-white" }` } />
        </button> 
          </div>
        </div> 
      ))}
        
      </div>
    </main>
  )
}

export default MovieLists 