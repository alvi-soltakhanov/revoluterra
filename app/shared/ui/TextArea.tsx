// Textarea.tsx
interface TextareaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  errorMessage?: string;
  className?: string;
}

export const TextArea = ({
  name,
  value,
  onChange,
  placeholder,
  errorMessage,
  className = "",
}: TextareaProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`h-[48px] placeholder-grey text-dark border ${
          errorMessage ? 'border-red-500' : 'border-transparent'
        } focus:border-primary text-[14px] w-full flex items-center px-4 rounded-lg justify-between outline-none bg-[#F6F5FA] transition-all duration-300 ease-in-out lg:h-[56px] lg:w-[480px] min-h-[160px] p-6`}
      />
      {errorMessage && <span className='text-red-500 text-sm'>{errorMessage}</span>}
    </div>
  );
};