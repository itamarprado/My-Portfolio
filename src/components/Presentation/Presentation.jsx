import { FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";

const Presentation = () => {
  return (
    <div className="bg-presentation bg-cover w-full min-h-80 relative">
        {/* Gradient */}
        <div className="flex flex-col w-full min-h-80 bg-opacity-75 bg-gradient-to-b from-transparent to-neutral-900 items-center justify-center">
            {/* Title */}
            <div className="flex flex-col w-3/4 self-center pb-5">
                <h1 className="text-5xl font-bold self-start">
                    Front-End
                    <div className="w-14 h-1 bg-blue-300"></div>
                </h1>
                <h1 className="text-5xl font-bold self-end"><span className="text-blue-300">Dev</span>eloper</h1>
            </div>
            {/* Resume */}
            <div className="font-light">
                Improving your business
            </div>
            {/* Social media */}
            <div className="flex absolute -bottom-3 gap-5 items-center">
                    <FaGithub size={30}/>
                    <FaTelegram size={30}/>
                    <FaDiscord size={30}/>
            </div>
        </div>
    </div>
  )
}
export default Presentation