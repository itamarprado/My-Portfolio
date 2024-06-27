import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex justify-center items-center px-5 fixed z-50 bg-gradient-to-b from-neutral-900 to-midnight w-full">
      <div className="flex justify-between w-full items-center max-w-6xl">
        <div className="py-5">Hey, I&apos;m Itamar</div>
        <div className="cursor-pointer relative sm:hidden py-2" onClick={toggleMenu}>{isOpen ? <IoMdClose size={30}/> : <IoMenu size={30}/>}</div>
        <nav className={`${isOpen ? "flex" : "hidden"} z-50 pb-8 bg-midnight absolute top-full left-0 flex-col w-full items-center sm:flex sm:gap-3 sm:flex-row sm:relative sm:w-max sm:left-0 sm:pb-0 sm:bg-transparent`}>
          <Link to="About" spy={true} smooth={true} duration={1000} offset={-64} className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">
            About
          </Link>
          <Link to="Skills" spy={true} smooth={true} duration={1000} offset={-64} className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">
            Skills
          </Link>
          <Link to="Projects" spy={true} smooth={true} duration={1000} offset={-64} className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">
            Projects
          </Link>
          <Link to="Contact" spy={true} smooth={true} duration={1000} offset={-64} className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">
            Contact
          </Link>

        </nav>
      </div>
    </div>
  )
}
export default Menu