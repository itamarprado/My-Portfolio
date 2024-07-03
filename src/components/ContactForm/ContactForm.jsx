import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import tw from "tailwind-styled-components";

import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useState } from "react";

import Lottie from "react-lottie";
import animationLoading from "/public/animations/animationLoading.json";
import animationSuccess from "/public/animations/animationSuccess.json";

// Styles for error messages
const ErrorMessage = tw.span`
    text-red-500
    text-sm
    absolute
    -bottom-5
    left-0
`;
// Schema to form validation
const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Please enter your name.")
    .max(20)
    // Capitalize name
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  email: z.string().email("Please enter a valid email address.").toLowerCase(),
  subject: z.string().min(1, "This field is required.").max(50).toLowerCase(),
  message: z
    .string()
    .min(1, "This field is required.")
    .max(200, "I'm sorry, the maximum number of characters was exceeded!"),
});

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: animationLoading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const successOptions = {
  loop: false,
  autoplay: true,
  animationData: animationSuccess,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ContactForm = () => {
  // Form validation with Zod and hook-forms (zod resolver and useForm utilities)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  //Submit action
  const sendMessage = async (formData) => {
    // Pattern to match the email template of EmailJS
    const templateParams = {
      sender_name: formData.name,
      subject: formData.subject,
      sender_message: formData.message,
      sender_email: formData.email,
    };

    // Send email with EmailJS
    try {
      setIsLoading(true);

      const response = await emailjs.send(
        "service_eddtvzz",
        "template_0vn16am",
        templateParams,
        "PmNL17DN1t0A30sUr"
      );
      setIsLoading(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false),
          reset({ name: "", message: "", subject: "", email: "" });
      }, 3000);

      console.log("Success", "\nStatus: " + response.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-3">
      <div
        className={`${
          success
            ? "from-emerald-500 to-green-500"
            : "from-blue-500 to-cyan-500"
        } w-full bg-gradient-to-br rounded-xl p-[1px]`}
      >
        <div className="flex flex-col w-full h-full bg-neutral-900 bg-opacity-95 rounded-xl pt-5 pb-10 px-6 gap-2">
          <div className="self-center pb-2 text-lg font-light">
            Send a direct message!
          </div>
          {/* Form-group */}
          <form
            onSubmit={handleSubmit(sendMessage)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col relative">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="bg-neutral-800 border-[1px] rounded-sm border-neutral-600 p-1 focus-within:outline-none focus-within:border-blue-400"
                {...register("name")}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="bg-neutral-800 border-[1px] rounded-sm border-neutral-600 p-1 focus-within:outline-none focus-within:border-blue-400"
                {...register("email")}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                className="bg-neutral-800 border-[1px] rounded-sm border-neutral-600 p-1 focus-within:outline-none focus-within:border-blue-400"
                {...register("subject")}
              />
              {errors.subject && (
                <ErrorMessage>{errors.subject.message}</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                className="bg-neutral-800 border-[1px] rounded-sm border-neutral-600 p-1 focus-within:outline-none focus-within:border-blue-400 max-h-[150px]"
                {...register("message")}
              />
              {errors.message && (
                <ErrorMessage>{errors.message.message}</ErrorMessage>
              )}
            </div>
            <div
              className={`h-12 flex items-center justify-center w-full bg-gradient-to-r ${isLoading ? "from-blue-500 to-cyan-500" : success
                ? "from-emerald-400 to-green-500"
                : "from-blue-500 to-cyan-500"}
                  rounded-lg p-[1px] mt-3`}
            >
              <button
                className={`${
                  isLoading ? "!bg-opacity-0" : success ? "!bg-opacity-0" : ""
                } flex justify-center items-center w-full h-full bg-neutral-800 px-6 rounded-lg bg-opacity-95 font-bold duration-300 hover:bg-opacity-0`}
              >
                {/*  */}
                <p className="bg-transparent">
                  {isLoading ? (
                    <div className="h-full">
                      <Lottie options={loadingOptions} height={70} direction={-1}/>
                    </div>
                  ) 
                  : success ? (
                    <div className="h-full">
                      <Lottie options={successOptions} height={48} />
                    </div>
                  ) :
                      "Submit"
                  }
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
