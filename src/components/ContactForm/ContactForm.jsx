import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import tw from "tailwind-styled-components";

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

const ContactForm = () => {
  // Form validation with Zod and hook-forms (zod resolver and useForm utilities)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  //Submit action
  const sendMessage = (formData) => {
    // Pattern to match the email template of EmailJS
    const templateParams = {
      sender_name: formData.name,
      subject: formData.subject,
      sender_message: formData.message,
      sender_email: formData.email,
    };

    // Send email with EmailJS
    emailjs
      .send(
        "service_eddtvzz",
        "template_0vn16am",
        templateParams,
        "PmNL17DN1t0A30sUr"
      )
      .then((res) => {
        console.log("Email sent successfully!", res.status, res.text);
        alert("Email sent successfully!");
      }, (err) => {
        console.log(err.message, err.code)
      });
  };

  return (
    <div className="py-3">
      <div className="w-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-[2px]">
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
            <div className="flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-[1px] mt-3">
              <button className="w-full h-full bg-neutral-800 px-6 py-2 rounded-lg bg-opacity-95 font-bold hover:bg-opacity-0 duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
