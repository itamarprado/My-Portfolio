const ContactForm = () => {
  return (
    <div className="py-3">
        <div className="w-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-[2px]">
            <div className="flex flex-col w-full h-full bg-neutral-900 bg-opacity-95 rounded-xl pt-5 pb-10 px-6 gap-2">
                <div className="self-center pb-2 text-lg font-light">Send a direct message!</div>
                {/* Form-group */}
                <div className="flex flex-col">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input id="name" type="text" className="bg-neutral-800 border-[1px] rounded-sm border-neutral-600 p-1 focus-within:outline-none focus-within:border-blue-400"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input id="email" type="email" className="bg-neutral-800 border-[1px] rounded-sm border-neutral-600 p-1 focus-within:outline-none focus-within:border-blue-400"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="subject">
                        Subject
                    </label>
                    <input id="subject" type="text" className="bg-neutral-800 border-[1px] rounded-sm border-neutral-600 p-1 focus-within:outline-none focus-within:border-blue-400"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea id="message" rows="4" className="bg-neutral-800 border-[1px] rounded-sm border-neutral-600 p-1 focus-within:outline-none focus-within:border-blue-400 max-h-[150px]"/>
                </div>
                <div className="flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-[1px] mt-3">
                    <button className="w-full h-full bg-neutral-800 px-6 py-2 rounded-lg bg-opacity-95 font-bold hover:bg-opacity-0 duration-300">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ContactForm