import tw from 'tailwind-styled-components'

const ErrorMessage = tw.span`
    text-red-500
    text-sm
    absolute
    -bottom-5
    left-0
`;

const FormTextArea = ({id, label, register, errors}) => {
  return (
    <div className="flex flex-col relative">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows="4"
        className="bg-neutral-800 border-[1px] rounded-sm border-neutral-600 p-1 focus-within:outline-none focus-within:border-blue-400 max-h-[150px]"
        {...register(id)}
      />
      {errors[id] && <ErrorMessage>{errors[id].message}</ErrorMessage>}
    </div>
  );
};
export default FormTextArea;
