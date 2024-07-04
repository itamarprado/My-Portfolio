import tw from "tailwind-styled-components";

// Styles for error messages
const ErrorMessage = tw.span`
    text-red-500
    text-sm
    absolute
    -bottom-5
    left-0
`;

const FormInput = ({id, label, type, register, errors}) => {
  return (
    <div className="flex flex-col relative">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className="bg-neutral-800 border-[1px] rounded-sm border-neutral-600 p-1 focus-within:outline-none focus-within:border-blue-400"
        {...register(id)}
      />
      {errors[id] && <ErrorMessage>{errors[id].message}</ErrorMessage>}
    </div>
  );
};

export default FormInput;
