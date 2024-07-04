// Form components
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import FormSubmitButton from "./FormSubmitButton";

// Zod Resolver to hook forms
import { zodResolver } from "@hookform/resolvers/zod";

// Schema to form validation
import contactFormSchema from "../../schemas/contactFormSchema";

// SMTP Handler
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import { useState } from "react";

// MAIN
const ContactForm = () => {
  // Form validation with Zod and hook-forms (zod resolver and useForm utilities)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  // Submit states
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  //Submit actions
  const sendMessage = async (formData) => {
    // Pattern to match the email template of EmailJS
    const templateParams = {
      sender_name: formData.name,
      subject: formData.subject,
      sender_message: formData.message,
      sender_email: formData.email,
    };

    // Send email with EmailJS and handle button state change
    try {
      setIsLoading(true);
      await emailjs.send(
        "service_eddtvzz",
        "template_0vn16am",
        templateParams,
        "PmNL17DN1t0A30sUr"
      );
      setIsLoading(false);
      setIsSuccessful(true);

      // Timeout to reset fields and form state
      setTimeout(() => {
        setIsSuccessful(false),
          reset({ name: "", message: "", subject: "", email: "" });
      }, 3000);
    } catch (error) {
      // temporary error handling
      console.log(error);
    }
  };

  return (
    <div className="py-3">
      <div
        className={`${
          isSuccessful
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
            <FormInput
              id={"name"}
              label={"Name"}
              type=""
              register={register}
              errors={errors}
              key={"name"}
            />

            <FormInput
              id={"email"}
              label={"Email"}
              type=""
              register={register}
              errors={errors}
              key={"email"}
            />

            <FormInput
              id={"subject"}
              label={"Subject"}
              type=""
              register={register}
              errors={errors}
              key={"subject"}
            />

            <FormTextArea
              id={"message"}
              label={"Message"}
              register={register}
              errors={errors}
              key={"message"}
            />

            <FormSubmitButton
              isLoading={isLoading}
              isSuccessful={isSuccessful}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
