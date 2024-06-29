import { FaGithub, FaTelegram, FaDiscord, FaLinkedin } from "react-icons/fa";
import socialMedia from "../../data/socialMedia";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full bg-gradient-to-t from-neutral-800 to-neutral-900 border-t-[1px] border-neutral-700 px-5 py-10">
      <div className="flex flex-col gap-5 w-full max-w-5xl justify-between sm:flex-row">
        <div>
          <h1 className="text-2xl font-semibold pb-10 bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text text-transparent">
            Nice to see you here!
          </h1>
          <div className="flex flex-col">
            <p className="font-medium text-sm text-neutral-300">Made with love &copy; 2024 Itamar do Prado</p>
          </div>
        </div>
        <div className="flex items-end">
          <div className="flex gap-2 text-2xl justify-center">
            <a href={socialMedia.Github} target="_blank" className="p-2 bg-neutral-700 rounded-xl cursor-pointer from-sky-300 to-sky-700 hover:bg-gradient-to-br hover: hover:text-neutral-900 duration-300">
              <FaGithub />
            </a>
            <a href={socialMedia.Telegram} target="_blank" className="p-2 bg-neutral-700 rounded-xl cursor-pointer from-sky-300 to-sky-700 hover:bg-gradient-to-br hover: hover:text-neutral-900 duration-300">
              <FaTelegram />
            </a>
            <a href={socialMedia.Discord} target="_blank" className="p-2 bg-neutral-700 rounded-xl cursor-pointer from-sky-300 to-sky-700 hover:bg-gradient-to-br hover: hover:text-neutral-900 duration-300">
              <FaDiscord />
            </a>
            <a href={socialMedia.Linkedin} target="_blank" className="p-2 bg-neutral-700 rounded-xl cursor-pointer from-sky-300 to-sky-700 hover:bg-gradient-to-br hover: hover:text-neutral-900 duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
