import { Select, SectionTitle } from '~/shared';  // Импортируем компонент SelectInput
import { CONTACTMETHODS } from '~/shared';

export const Contacts = ({ formData, setFormData, errors }: any) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState: any) => ({
      ...prevState,
      phone: e.target.value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevState: any) => ({
      ...prevState,
      contactMethod: e.target.value,
    }));
  };

  return (
    <>
      <SectionTitle title="Контакты" />

      {/* Телефон */}
      <div className='flex-row mb-6 grid gap-4 lg:grid-cols-[220px_1fr] lg:items-start lg:gap-2'>
        <span className='m-0 font-normal text-dark text-[14px] lg:mt-3'>Телефон</span>
        <div className='flex gap-4 flex-col'>
          <div>
            <input
              type='tel'
              className={`h-[48px] bg-[#F6F5FA] placeholder-grey text-dark border border-transparent focus:border-primary text-[14px] w-full flex items-center px-4 rounded-lg justify-between outline-none bg-background transition-all duration-300 ease-in-out lg:w-[480px] ${
                errors?.phone ? 'border border-red-500' : ''
              }`}
              inputMode='tel'
              placeholder='8 ___ ___ - __ - __ *'
              value={formData.phone || ''}
              onChange={handlePhoneChange}
            />
            {errors.phone && <span className='text-red-500 text-sm'>{errors.phone}</span>}
          </div>

          <span className='m-0 font-normal text-[#636570] text-[13px] lg:w-[480px]'>
            Чтобы ваши номера не попали в базы мошенников, мы показываем вместо них подменные, а
            звонки переводим вам. Эту защиту нельзя отключить.
          </span>
          <span className='m-0 font-normal text-[#636570] text-[13px] cursor-pointer underline lg:w-[480px]'>
            Подробнее
          </span>
        </div>
      </div>

      <Select
        label="Способ связи"
        options={CONTACTMETHODS.map(method => method.value)}
        value={formData.contactMethod}
        onChange={handleSelectChange}
        errorMessage={errors?.contactMethod}
      />
    </>
  );
};