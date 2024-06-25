import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex justify-center items-center px-5 fixed z-50 bg-gradient-to-b from-gray-900 to-neutral-900 w-full">
      <div className="flex justify-between w-full items-center max-w-[1200px]">
        <div className="py-5">Hello, I&apos;m Itamar</div>
        <div className="cursor-pointer relative sm:hidden py-2" onClick={toggleMenu}>{isOpen ? <IoMdClose size={30}/> : <IoMenu size={30}/>}</div>
        <nav className={`${isOpen ? "flex" : "hidden"} z-50 pb-8 bg-neutral-900 absolute top-full left-0 flex-col w-full items-center sm:flex sm:gap-3 sm:flex-row sm:relative sm:w-max sm:left-0 sm:pb-0 sm:bg-transparent`}>
          <a className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">About</a>
          <a className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">Projects</a>
          <a className="p-2 cursor-pointer border-b-2 border-blue-400 border- sm:border-b-transparent hover:border-b-blue-400 hover:text-blue-400">Contact</a>
        </nav>
      </div>
    </div>
  )
}
export default Menu