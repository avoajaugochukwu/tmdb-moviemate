
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import "../../Styles/moviedetails.css"
import Header from '../Layouts/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import useStore from "../../store"



const Moviedetails = () => {
  const { movieId } = useParams() 

  const { data: movieDetails, isLoading, error } = useQuery({
    queryKey: ["movieDetails", movieId],

    queryFn: () => 
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=11eec6b26256cd542c6f92ff289594c5`).then((res) => res.json()), //fetching data from tmdb api

  }); 

  const favoriteMovies = useStore((state) => state.favoriteMovies);

  const toggleFavoriteMovie = useStore((state) => state.toggleFavoriteMovie);


  if (isLoading) {
    return <div className='text-white'>
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  } 

  if (error) {
    return <p className='text-red-600 font-bold text-lg'>Something went wrong</p>
  }
  
  return (
    <>
    <Header />
   
    <div className='text-black bg-white min-h-screen w-full pb-10'>
    <div className='justify-center items-center flex flex-col'>

    <h1 className='details-header text-center font-bold text-2xl mt-2'>{movieDetails.title}</h1>
     
     <div className='card text-black bg-white lg:w-[700px] sm:w-[350px] h-[340px]  mt-4 shadow-md'>
       {movieDetails && (
         <div className=' grid lg:md:grid-cols-2 sm:grid-cols-1 gap-6 text-sm'>
           <div> <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} className='w-full h-[340px] rounded' /></div>
           <div className=" flex flex-col justify-between"> 

           <div className='flex justify-between gap-10'>
            <div><p>{movieDetails.overview}</p> </div>
           
            <div>
            <button onClick={() => toggleFavoriteMovie(movieDetails.id)}> 
         <FontAwesomeIcon icon={faHeart} className={`heart  h-6 w-5 mt-2 pr-2 
         ${favoriteMovies.includes(MovieDetails.id) ? "text-secondary-200" : "text-secondary-400" }` } />
        </button>
            </div>
           </div>

             <div>
             <p><span className='font-bold'>Genres: </span>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
             </div>

           <div className='flex justify-between'>
           <p><span>{movieDetails.vote_average} </span>({movieDetails.vote_count})</p>
           <p className='mr-3'>{movieDetails.release_date}</p>
           </div>
           </div>
          
         </div>
       )} 
     </div>
    </div>
   <button className='bg-secondary-100 text-primary mt-8 px-7 py-1 ml-16' onClick={() => window.history.back()}>Go back</button>
    </div>
    </>
  )
}

export default Moviedetails