import { Link } from 'react-router-dom'
import "../../Styles/header.css"

const Header = () => {

  return (
    <header className='container text-secondary-100 min-w-full flex bg-white'>
    <div className="navbar bg-base-100">
    <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost text-2xl font-bold lg:ml-16 sm:ml-[-7px]">MovieMate</Link>
  </div>
</div>
    </header>
  )
}

export default Header