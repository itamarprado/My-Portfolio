import { FaGithub, FaTelegram, FaDiscord, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full bg-gradient-to-t from-neutral-800 to-neutral-900 border-t-[1px] border-neutral-700 px-5 py-3">
      <div className="pb-5">
        <p className="font-light text-md pb-5">Follow me on me social media!</p>
        <div className="flex gap-2 text-3xl justify-center">
          <div className="p-2 bg-neutral-500 rounded-xl cursor-pointer hover:bg-sky-300 hover:text-neutral-900 duration-300">
            <FaGithub />
          </div>
          <div className="p-2 bg-neutral-500 rounded-xl cursor-pointer hover:bg-sky-300 hover:text-neutral-900 duration-300">
            <FaTelegram />
          </div>
          <div className="p-2 bg-neutral-500 rounded-xl cursor-pointer hover:bg-sky-300 hover:text-neutral-900 duration-300">
            <FaDiscord />
          </div>
          <div className="p-2 bg-neutral-500 rounded-xl cursor-pointer hover:bg-sky-300 hover:text-neutral-900 duration-300">
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-light text-sm">Developed with love (and coffee) by <span className="text-blue-400">Itamar</span></p>
        <p className="font-light text-sm">
          &copy; All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
