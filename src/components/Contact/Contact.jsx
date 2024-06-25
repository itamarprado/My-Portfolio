import { FaTelegram, FaDiscord, FaLinkedin} from "react-icons/fa";
import { TbClick } from "react-icons/tb";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="px-5 pb-10">
            <h1 className="w-max text-3xl font-bold bg-gradient-to-r from-blue-700 via-blue-500-500 to-cyan-300 bg-[length:80%_6px] bg-left-bottom bg-no-repeat pb-[6px]">Contact</h1>
            <p className="text-sm py-3">Feel free to use any of my social media to contact me.</p>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-center text-neutral-400">
                    <TbClick />
                    <p className="text-sm">Click to open</p>
                </div>
                {/* Social Media */}
                <div className="flex justify-around py-3">
                    <div className="flex flex-col items-center cursor-pointer p-2 rounded-lg border-b-[1px] border-t-[1px] border-neutral-600 hover:border-blue-400 hover:text-blue-400 duration-300">
                        <FaTelegram size={30} />
                        <p>Telegram</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer p-2 rounded-lg border-b-[1px] border-t-[1px] border-neutral-600 hover:border-blue-400 hover:text-blue-400 duration-300">
                        <FaDiscord size={30} />
                        <p>Discord</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer p-2 rounded-lg border-b-[1px] border-t-[1px] border-neutral-600 hover:border-blue-400 hover:text-blue-400 duration-300">
                        <FaLinkedin size={30} />
                        <p>Linkedin</p>
                    </div>
                </div>
                <div className="flex items-center justify-center text-blue-400 gap-3">
                    <div className="w-8 h-[1px] bg-white"></div>
                    <p className="text-xs">OR</p>
                    <div className="w-8 h-[1px] bg-white"></div>
                </div>
                <ContactForm />
            </div>

    </div>
  )
}
export default Contact