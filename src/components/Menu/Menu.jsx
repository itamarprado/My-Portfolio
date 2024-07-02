import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Size of menu to control the offset when scrolling
  const menuSize = 64
  
  // Handle the menu navigation, if in project page it'll go back to home 
  // and scroll to section, otherwise it'll just scroll to the section
  const handleNavigation = (path, id) => {
    if (location.pathname === '/') {
      scroll.scrollTo(document.getElementById(id).offsetTop - menuSize)
    } 
    else {
      navigate(path);
      setTimeout(() => {
        scroll.scrollTo(document.getElementById(id).offsetTop - menuSize)
      }, 300); // Ajuste esse timeout conforme necessário
    }
    setIsOpen(false)
  }

  // Manage the state of mobile menu
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  // 

  return (
    <div className="flex justify-center items-center px-5 fixed z-50 bg-gradient-to-b from-neutral-900 to-midnight w-full">
      <div className="flex justify-between w-full items-center max-w-6xl">
        <div className="py-5">Hey, I&apos;m Itamar</div>
        <div className="cursor-pointer relative sm:hidden py-2" onClick={toggleMenu}>{isOpen ? <IoMdClose size={30}/> : <IoMenu size={30}/>}</div>
        {/* Verify screen size to change to mobile/desktop version */}
        <nav className={`${isOpen ? "flex" : "hidden sm:!flex"} pb-8 bg-midnight absolute top-full left-0 flex-col w-full items-center sm:gap-3 sm:flex-row sm:relative sm:w-max sm:left-0 sm:pb-0 sm:bg-transparent`}>
          
            <Link to="About" onClick={() => handleNavigation('/', 'About')} className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">
              About
            </Link> 
            <Link to="About" onClick={() => handleNavigation('/', 'Skills')} className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">
              Skills
            </Link> 
            <Link to="About" onClick={() => handleNavigation('/', 'Projects')} className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">
              Projects
            </Link> 
            <Link to="About" onClick={() => handleNavigation('/', 'Contact')} className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">
              Contact
            </Link>
        </nav>
      </div>
    </div>
  )
}
export default Menu