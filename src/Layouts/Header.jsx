import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='container text-[#CCBC5B] min-w-full' data-theme='dim'>
    <div className="navbar bg-base-100">
    <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost text-xl font-normal ">MovieMate</Link>
  </div>
</div>
    </header>
  )
}

export default Header