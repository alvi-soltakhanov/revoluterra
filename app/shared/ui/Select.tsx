import { chevronDownIcon } from "../assets/ChevronDownIcon";

interface SelectInputProps {
  title?: string
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  errorMessage?: string;
}

export const Select: React.FC<SelectInputProps> = ({ title, label, options, value, onChange, errorMessage }) => {
  return (
    <div className="flex-row mb-9 grid gap-4 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-2">
      <span className="m-0 font-normal text-dark text-[14px]">{label}</span>
      <div>
        <div className="relative w-full lg:w-[480px]">
          <select
            value={value}
            onChange={onChange}
            className={`appearance-none min-w-[180px] bg-[#F6F5FA] p-3 rounded-md focus:outline-none w-full h-[48px] text-[14px] text-dark ${errorMessage ? 'border border-red-500' : ''
              }`}
          >
            <option value="" disabled>
              {title}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {chevronDownIcon}
        </div>
        {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
      </div>

    </div>
  );
};