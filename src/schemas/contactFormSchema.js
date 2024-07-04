import z from "zod";

const contactFormSchema = z.object({
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
  subject: z.string().min(1, "Please enter the message subject.").max(50).toLowerCase(),
  message: z
    .string()
    .min(1, "This field is required.")
    .max(200, "I'm sorry, the maximum number of characters was exceeded!"),
});

export default contactFormSchema;
