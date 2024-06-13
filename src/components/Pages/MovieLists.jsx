import { useQuery } from "@tanstack/react-query"
import useStore from "../../store"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import "../../Styles/movieLists.css"
import MovieListHeader from "../Layouts/MovieListHeader"
import { useState } from "react"



const MovieLists = () => { 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(44493);
  const moviePerPage = 15 //total movie per page
  
  const { data, isLoading, error} = useQuery({
    queryFn: () => 
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=11eec6b26256cd542c6f92ff289594c5&page=${page}`).then((res) => res.json()
  ), 
  queryKey: ["movies", page], 
  refetchOnWindowFocus: true,
  refetchOnMount: true,
  refetchOnReconnect: true,
  staleTime: 1000 * 60 * 15,
  onSuccess: (data) => {
    setTotalPages(data.total_pages);
  }
  }); 

  const favoriteMovies = useStore((state) => state.favoriteMovies);

  const toggleFavoriteMovie = useStore((state) => state.toggleFavoriteMovie);

 const { searchTerm, setSearchTerm } = useStore((state) => ({searchTerm: state.searchTerm, setSearchTerm: state.setSearchTerm})); 
  
  
  const displayMovies = data?.results
  ?.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .slice(0, moviePerPage);


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
    <>
    <main className=" min-h-screen min-w-full pb-10">
      <MovieListHeader />
      
      <h1 className="text-black font-extrabold text-2xl lg:ml-[42px] text-start">Lists of movies</h1>
      
    
      <div className="movie-lists flex flex-wrap gap-10 justify-center mr-5">
        {displayMovies?.map((movie) => (
        <div key={movie.id} className="movie-conrtainer justify-center bg-[#ffffff8b]  rounded-lg border w-[350px] h-[545px] mx-3 my-3">
          
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-[400px] rounded-t-lg" />

          <div className="detail flex justify-between">
          <Link to={`/movie/${movie.id}`} className="details-button text-2xl mt-1 mx-5 text-secondary-100 mb-1">
            {movie.title}
          </Link>
         <button onClick={() => toggleFavoriteMovie(movie.id)}> 
         <FontAwesomeIcon icon={faHeart} className={`heart  h-6 w-5 mt-2 mr-4 
         ${favoriteMovies.includes(movie.id) ? "text-secondary-200" : "text-secondary-400" }` } />
        </button> 
          </div>
          <div className="grid grid-cols-1">
            <p className="text-sm ml-5 mb-2 text-secondary-500">{movie.overview.slice(0, 92)}....</p>
            <div className="flex justify-between mt-1 mx-5">
              <div>
              <p className="text-[10px]">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" /><span className="text-secondary-300 mr-1">{movie.vote_average}</span> <span className="text-secondary-500">({movie.vote_count}+)</span> </p>
              </div>
              <div>
              <p className="text-[10px] text-secondary-500"> {movie.release_date}</p>
              </div>
              
              
            </div>
          </div>
        </div> 
    
      ))}
        
      </div>

      {/* Pagination */} 
      <div className="flex justify-center mt-5">
      <button
          className="bg-white text-[#2A303C] px-3 py-1 mx-2 rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className=" mx-2 my-2 text-black">
          Page {page} / {totalPages}
        </span>
        <button
          className="bg-white text-[#2A303C] px-3 py-1 mx-2 rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages}
        >
          Next page
        </button>
      </div>

     
    </main>
    
     </>
  )
}

export default MovieLists 
