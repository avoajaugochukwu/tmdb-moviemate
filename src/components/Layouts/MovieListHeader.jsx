import { Link } from 'react-router-dom'
import "../../Styles/movieListheader.css"

const Header = () => {

  return (
    <header className='container text-secondary-100 min-w-full flex bg-white'>
    <div className="navbar bg-base-100">
    <div className="flex-1">
    <Link to={"/"} className="header-list-text btn btn-ghost text-2xl font-bold lg:ml-5">MovieMate</Link>
  </div>
</div>
</header>
  )
}

export default Header