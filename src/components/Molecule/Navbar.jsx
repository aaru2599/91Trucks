import { CiLocationOn } from "react-icons/ci";
import { navbarData } from "../../data/NavbarData";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navData = navbarData;
  const scrollToTop=()=>{
window.scrollTo({
  top:0,
  behavior:"smooth"
})
  }
  return (
    <div className="flex justify-between items-center bg-white p-4 h-[60px] border-b-2 border-theme-color ">
      <Link to={"/"}>
        <img onClick={scrollToTop} src={navData.left} alt="" />
      </Link>
      <div className="md:flex gap-6 hidden ">
        {navData.center.map((data, index) => {
          return <div key={index} className="cursor-pointer flex items-center text-sm font-semibold"><span>{data.nav} </span>
          <MdKeyboardArrowDown /></div>;
        })}
      </div>
      <div className="flex gap-4 items-center">
        <select name="" id="" className="bg-transparent border-0 no-outlines">
            <option value="en" className="w-4">En</option>
            <option value="Hindi">हिं</option>

        </select>
        <div><CiLocationOn/> </div>
      </div>
    </div>
  );
};

export default Navbar;
