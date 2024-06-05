
import Homepage from '../src/Pages/Homepage'
import MovieLists from '../src/Pages/MovieLists'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Moviedetails from './Pages/Moviedetails'
import PageNotFound from './Pages/PageNotFound'


const App = () => { 
  
  return (
    <div className='justify-center items-center'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movies' element={<MovieLists />} />
          <Route path='/movie/:movieId' element={<Moviedetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App 