
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import "../Styles/moviedetails.css"


const Moviedetails = () => {
  const { movieId } = useParams() 

  const { data: movieDetails, isLoading, error } = useQuery({
    queryKey: ["movieDetails", movieId],

    queryFn: () => 
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=11eec6b26256cd542c6f92ff289594c5`).then((res) => res.json()), //fetching data from tmdb api

  });

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
    <div className='text-white bg-[#233549] min-h-screen w-full pb-10'>
    <div className='justify-center items-center flex flex-col'>

    <h1 className='details-header text-center font-bold text-2xl pt-5'>Movies details</h1>
     
     <div className='card text-black bg-white lg:w-[700px] sm:w-[350px] ml-20 mt-5'>
       {movieDetails && (
         <div className='card-body grid lg:md:grid-cols-2 sm:grid-cols-1 text-sm'>
           <div> <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} className='w-[380px] h-[300px] rounded-sm' /></div>
           <div className="leading-7"> 
            <h1><span className='font-bold'>Title: </span>{movieDetails.title}</h1>
           <p><span className='font-bold'>Release date: </span>{movieDetails.release_date}</p>
           <p><span className='font-bold'> vote average: </span> {movieDetails.vote_average}</p>
           <p><span className='font-bold'>Overview: </span>{movieDetails.overview}</p> 
           </div>
          
         </div>
       )} 
     </div>
    </div>

    </div>
    </>
  )
}

export default Moviedetails