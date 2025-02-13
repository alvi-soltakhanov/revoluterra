// Button.tsx
interface ButtonProps {
  onClick: () => void;
  isActive: boolean;
  label: string;
  width?: string;
}

export const Button = ({ onClick, isActive, label, width = 'auto' }: ButtonProps) => {
  return (
    <button
      className={`h-[48px] text-[14px] disabled:opacity-50 rounded-lg px-4 flex items-center gap-x-[10px] hover:opacity-[0.9] transition-opacity duration-550 relative font-semibold ${
        isActive ? 'bg-[#2A2C36] text-white' : 'bg-transparent border border-dark text-dark'
      } w-${width}`}
      type='button'
      onClick={onClick}
    >
      <span className='whitespace-nowrap w-full text-inherit'>{label}</span>
    </button>
  );
};