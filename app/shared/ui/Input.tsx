// Input.tsx
interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  errorMessage?: string;
  className?: string;
}

export const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  errorMessage,
  className = "",
}: InputProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-[#F6F5FA] h-[48px] placeholder-grey text-dark border ${
          errorMessage ? 'border-red-500' : 'border-transparent'
        } text-[14px] w-full flex items-center px-4 rounded-lg justify-between outline-none pt-0 bg-background transition-all duration-300 ease-in-out lg:h-[56px] lg:w-[480px]`}
      />
      {errorMessage && <span className='text-red-500 text-sm'>{errorMessage}</span>}
    </div>
  );
};