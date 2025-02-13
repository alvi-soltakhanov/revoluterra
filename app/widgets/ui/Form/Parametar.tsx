import { Button, Input, SectionTitle } from "~/shared";

export const Parametar = ({ formData, setFormData, errors }: any) => {
  return (
    <div>
       <SectionTitle title="Параметры" /> 

      <div className='mb-6 grid gap-4 lg:grid-cols-[220px_1fr] lg:items-start lg:gap-2'>
        <span className='m-0 font-normal text-dark text-[14px] lg:mt-4'>Название объявления</span>
        <div className='flex gap-4 flex-col'>
          <Input
            type='text'
            name='name'
            value={formData.name}
            onChange={(e) => setFormData((prevState: any) => ({ ...prevState, name: e.target.value }))}
            placeholder='Название *'
            errorMessage={errors.name}
          />
        </div>
      </div>

      <div className='mb-5 grid items-start gap-4 lg:mb-7 lg:grid-cols-[220px_1fr] lg:gap-2'>
        <span className='m-0 font-normal text-dark text-[14px] lg:mt-4'>Состояние</span>
        <div className='flex flex-col gap-2 lg:gap-4'>
          <div className='flex flex-row gap-2'>
            <Button
              onClick={() => setFormData((prevState: any) => ({ ...prevState, isNew: true }))}
              isActive={formData.isNew}
              label="Новое"
              width="88px"
            />
            <Button
              onClick={() => setFormData((prevState: any) => ({ ...prevState, isNew: false }))}
              isActive={!formData.isNew}
              label="Б/У"
              width="72px"
            />
          </div>
        </div>
      </div>

      <div className='mb-9 grid items-center gap-4 lg:grid-cols-[220px_1fr] lg:gap-2'>
        <span className='m-0 font-normal text-dark text-[14px]'>Вид объявления</span>
        <div className='flex flex-row gap-2'>
          <Button
            onClick={() => setFormData((prevState: any) => ({ ...prevState, isResale: true }))}
            isActive={formData.isResale}
            label="Покупал для себя"
            width="auto"
          />
          <Button
            onClick={() => setFormData((prevState: any) => ({ ...prevState, isResale: false }))}
            isActive={!formData.isResale}
            label="Покупал для перепродажи"
            width="auto"
          />
        </div>
      </div>
    </div>
  );
};