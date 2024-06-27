import { FaTelegram, FaDiscord, FaLinkedin } from "react-icons/fa";
import { TbClick } from "react-icons/tb";
import ContactForm from "../ContactForm/ContactForm";
import tw from "tailwind-styled-components";

const SocialMedia = tw.div`
    flex
    flex-col
    items-center
    cursor-pointer
    p-2
    rounded-lg
    border-[1px]
    border-neutral-700
    hover:border-blue-400
    hover:text-blue-400
    duration-300
    w-max
`;

const Contact = () => {
  return (
    <div id="Contact" className="flex w-full justify-center px-5 pb-10">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col">
          <h1 className="w-max text-3xl font-bold bg-gradient-to-r from-blue-700 via-blue-500-500 to-cyan-300 bg-[length:80%_6px] bg-left-bottom bg-no-repeat pb-[6px]">
            Contact
          </h1>
          <p className="text-sm py-3">
            Feel free to use any of my social media to contact me.
          </p>
          <div className="flex flex-col w-full lg:flex-row lg:gap-2 lg:justify-between lg:max-w-[80%] self-center">
            {/* Social Media */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-center text-neutral-400">
                <TbClick />
                <p className="text-sm">Click to open</p>
              </div>

              <div className="flex justify-center px-3 py-3 gap-5 lg:items-center">
                <SocialMedia>
                  <FaTelegram size={30} />
                  <p>Telegram</p>
                </SocialMedia>
                <SocialMedia>
                  <FaDiscord size={30} />
                  <p>Discord</p>
                </SocialMedia>
                <SocialMedia>
                  <FaLinkedin size={30} />
                  <p>Linkedin</p>
                </SocialMedia>
              </div>
            </div>
            <div className="flex items-center justify-center text-blue-400 gap-3">
              <div className="w-8 h-[1px] bg-white"></div>
              <p className="text-xs">OR</p>
              <div className="w-8 h-[1px] bg-white"></div>
            </div>
            {/* Form */}
            <div className="w-full max-w-[600px] self-center lg:w-2/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
