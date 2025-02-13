import { useState } from 'react';

export const SubmitButtons = ({ onSubmit }: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <div className='flex flex-row gap-4 mt-[48px]'>
        <button
          className={`h-[48px] text-[14px] disabled:opacity-50 rounded-lg px-4 flex items-center gap-x-[10px] hover:opacity-[0.9] transition-opacity duration-550 relative font-semibold bg-[#74B200] border border-primary text-white flex-1 lg:w-[180px] lg:flex-none ${
            isSubmitting ? 'opacity-50' : ''
          }`}
          type='submit'
          // onClick={handleSubmit}
          // disabled={isSubmitting}
        >
          <span onClick={onSubmit} className='whitespace-nowrap w-full text-inherit'>
            Разместить
          </span>
        </button>
        <button
          className='h-[48px] text-[14px] disabled:opacity-50 rounded-lg px-4 flex items-center gap-x-[10px] hover:opacity-[0.9] transition-opacity duration-550 relative font-semibold bg-transparent border border-dark text-dark flex-1 lg:w-[180px] lg:flex-none'
          type='button'
          // onClick={handleSaveExit}
        >
          <span className='whitespace-nowrap w-full text-inherit'>Сохранить и выйти</span>
        </button>
      </div>
      <div className='flex flex-col mt-6 gap-0'>
        <span className='m-0 font-normal text-[#636570] text-[13px]'>
          Вы публикуете объявление и данные в нём, чтобы их мог посмотреть кто угодно в интернете.
        </span>
        <div className='flex flex-row gap-1'>
          <span className='m-0 font-normal text-[#636570] text-[13px]'>
            Вы также соглашаетесь с
          </span>
          <span
            className='m-0 font-normal text-[#636570] text-[13px] cursor-pointer underline lg:w-[480px]'
            // onClick={handleClick}
          >
            правилами.
          </span>
        </div>
      </div>
    </>
  );
};
