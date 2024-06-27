import { FaGithub, FaTelegram, FaDiscord, FaLinkedin } from "react-icons/fa";
import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-scroll";

const Presentation = () => {
  return (
    <div className="bg-presentation bg-cover w-full h-[100vh] relative bg-center">
      {/* Gradient */}
      <div className="flex flex-col w-full h-[100vh] bg-gradient-to-b from-transparent to-neutral-900 items-center justify-center px-5">
        {/* First section (Social, Presentation) */}
        <div className="flex flex-col w-full max-w-[1200px] md:flex-row items-center">
          {/* Text content */}
          <div className="md:flex-start md:max-w-[50%]">
            <div className="flex gap-5 items-start w-full pb-2">
              <a href="https://github.com/itamarprado" target="_blank">
                <FaGithub
                  size={25}
                  className="cursor-pointer hover:text-sky-500"
                />
              </a>
              {/* TO DO: ADD TELEGRAM LINK */}
              <a href="" target="_blank">
                <FaTelegram
                  size={25}
                  className="cursor-pointer hover:text-sky-500"
                />
              </a>
              <a href="https://discord.gg/HAsTvyBr" target="_blank">
                <FaDiscord
                  size={25}
                  className="cursor-pointer hover:text-sky-500"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/itamarprado/"
                target="_blank"
              >
                <FaLinkedin
                  size={25}
                  className="cursor-pointer hover:text-sky-500"
                />
              </a>
            </div>
            <div className="flex flex-col w-full self-start pb-5 max-w-[360px]">
              <h1 className="text-4xl font-bold self-start w-max bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-300 bg-[length:40%_3px] bg-left-bottom bg-no-repeat pb-[6px]">
                Front-end
              </h1>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-600 to-sky-200 bg-clip-text text-transparent">
                Developer
              </h1>
            </div>
            {/* Resume */}
            <div className="font-light self-start">
              <p>
                <strong>Welcome to my portfolio</strong>
              </p>
              I&apos;m Itamar, a front-end developer with focus on Web
              Development. I&apos;m building my career path by learning new
              technologies and building solo projects to showcase my skills.
            </div>

            <div className="flex gap-5 pt-5">
              <div className="flex items-center justify-center bg-gradient-to-br from-blue-700 to-sky-400 w-max rounded-lg p-[1px] hover:shadow-blue-700 hover:shadow-[0px_0px_25px_3px] duration-150 cursor-pointer hover:scale-110">
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-64}
                  className="flex items-center px-5 py-2 bg-neutral-800 w-[calc(100% - 1px)] h-[calc(100%-1px)] rounded-lg"
                >
                  Contact
                </Link>
              </div>
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-64}
                className="flex px-5 py-2 items-center justify-center bg-gradient-to-r from-blue-700 to-sky-400 rounded-lg hover:shadow-blue-700 hover:shadow-[0px_0px_15px_3px] hover:scale-110 duration-150 cursor-pointer"
              >
                See projects
                <PiArrowRightLight size={25} className="ml-2" />
              </Link>
            </div>
          </div>
          {/* Img */}
          {/* Future here will have an image with mockups of an project */}
        </div>
        {/* Arrow lines */}
        <div className="flex flex-col w-full h-auto absolute items-center animate-bounce-slow bottom-10 md:bottom-0">
          <span
            className="bg-white w-12 h-5"
            style={{
              clipPath: "polygon(3% 0, 50% 95%, 97% 0, 100% 0, 50% 100%, 0 0)",
            }}
          ></span>
          <span
            className="bg-white w-12 h-5 -mt-1"
            style={{
              clipPath: "polygon(3% 0, 50% 95%, 97% 0, 100% 0, 50% 100%, 0 0)",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};
export default Presentation;
