import { Link } from 'react-router-dom'
import Headers from '../Layouts/Header'
import "../../Styles/homepage.css"
import Poster from '../Layouts/Poster';

const Homepage = () => { 

  return (
    <> 
       <Headers /> 
        <main className="container flex flex-col mx-auto h-screen">
          <div className='text-8xl font-semibold text-secondary-200 ml-14'>
          <h1 className="">Learn more about</h1>
        <p>your favourite</p>
        <p>movies</p>
          </div>
        
       
        <div className='flex gap-7 ml-16 mt-5'>

          <Link to={"/movies"} className="get-started text-white bg-secondary-100 py-1 px-5 text-sm shadow-inner">Get started</Link>
          
          <Link to={"/movies"} className="lucky hover:bg-secondary-100  text-secondary-200 border border-secondary-100 shadow-inner py-1 px-5 text-sm">I am feeling lucky</Link>

        </div>

          <div className='pb-14'>
          <div className='flex justify-center lg:mt-[-90px] lg:ml-[160px] sm:mt-5 sm:ml-3'>
           <Poster movieId={183} />
          </div>
          <div className='flex lg:justify-end sm:justify-center mr-20 lg:mt-0'>
          <Poster movieId={20} />
          </div>

          </div>
          
        </main>
    </>
  )
}

export default Homepage