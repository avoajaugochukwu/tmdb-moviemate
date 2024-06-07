import { useQuery } from "@tanstack/react-query"
import useStore from "../store"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"
import "../Styles/movieLists.css"
import Header from "../Layouts/Header"
import { useState } from "react"

const MovieLists = () => { 
  const [page, setPage] = useState(1);
  const moviePerPage = 16 //total movie per page
  
  const { data, isLoading, error} = useQuery({
    queryFn: () => 
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=11eec6b26256cd542c6f92ff289594c5&page=${page}`).then((res) => res.json()
  ), 
  queryKey: ["movies", page], 
  refetchOnWindowFocus: true,
  refetchOnMount: true,
  refetchOnReconnect: true,
  staleTime: 1000 * 60 * 15,
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
    <main className=" min-h-screen min-w-full pb-10 bg-[#80878D] bg-gradient-to-r from-[#D1D3D4] via-[#adb4bb] to-[#a2a4a5]">
      <Header />
      <div className="flex justify-center flex-col items-center ml-5">
      <h1 className="text-black font-extrabold text-2xl mt-2">Movie Lists</h1>
      <div className="relative">
        <FontAwesomeIcon icon={faSearch} className="text-[#9FA9B4] absolute top-[28%] left-[190px] h-6" />
      <input type="text" placeholder="Search movies" className="outline bg-white rounded-xl px-5 py-1 my-3 shadow-xl" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
        
      </div>
    
      <div className="movie-lists flex flex-wrap justify-center">
      {displayMovies.length === 0 && <p className="text-black text-center col-span-full font-semibold text-2xl">Movie not found</p>}
        {displayMovies?.map((movie) => (
        <div key={movie.id} className="movie-conrtainer justify-center bg-[#ffffff8b] rounded-lg shadow-lg w-[280px] h-[350px] mx-3 my-3">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-[280px] rounded-t-lg" />
          <div className="detail flex flex-row gap-8 mt-2 ml-4">
          <Link to={`/movie/${movie.id}`} className="details-button bg-white text-sm text-[#2A303C] w-[100px] h-[30px] text-center pt-1 ml-5 mt-3  rounded-md">
            View details
          </Link>
         <button onClick={() => toggleFavoriteMovie(movie.id)}> 
         <FontAwesomeIcon icon={faHeart} className={`heart  h-8 w-10 pt-3 
         ${favoriteMovies.includes(movie.id) ? "text-red-600" : "text-white" }` } />
        </button> 
          </div>
        </div> 
      ))}
        
      </div>

      {/* Pagination */} 
      <div className="flex justify-center mt-5">
      <button
          className="bg-white text-[#2A303C] px-3 py-1 mx-2 rounded-md shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className=" mx-2 my-2 text-black">
          Page {page} / {data?.total_pages}
        </span>
        <button
          className="bg-white text-[#2A303C] px-3 py-1 mx-2 rounded-md shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === data?.total_pages}
        >
          Next page
        </button>
      </div>
    </main>
  )
}

export default MovieLists 
