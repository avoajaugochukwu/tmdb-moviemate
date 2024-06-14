/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
// import "../../Styles/header.css";
import logo from "../../assets/svg/logo.svg";

{
  /* "px-5 md:px-20" use 5px for smaller screens, from md screen which is tablet up use 20px  */
}
{
  /* Since you are using 'Link' you don't need to use button in the css, because it adds a background on hover */
}

const Header = () => {
  return (
    <div className="my-5">
      <Link to={"/"} className="flex gap-3 w-20">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <p className="text-[#a855f7] text-2xl">MovieMate</p>
      </Link>
    </div>
  );
};

export default Header;
