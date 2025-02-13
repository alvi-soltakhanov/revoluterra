import { useState } from 'react';
import {
  Contacts,
  Details,
  Header,
  Paragraph,
  Parametar,
  PlaceOfTransaction,
  SubmitButtons,
} from '~/widgets';
import { useValidationSchema } from '~/shared';
import { formSchema } from '~/shared';

export const AppendAdPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    isNew: true,
    isResale: true,
    description: '',
    price: '',
    photos: [],
    videoUrl: '',
    city: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleSubmit, errors } = useValidationSchema(formSchema, formData);

  const onSubmit = () => {
    const result = handleSubmit();
    if (result.success) {
      console.log(formData)
      setIsSubmitted(true);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center bg-[#F6F5FA] '>
      <Header />
      {isSubmitted ? (
        <div className='flex flex-col justify-center min-h-screen'>
          <div className='p-6 bg-white rounded-lg shadow-md text-center h-'>
            <h2 className='text-2xl font-bold text-green-600'>Объявление успешно загружено!</h2>
            <p className='text-gray-600 mt-2'>Спасибо! Ваше объявление опубликовано.</p>
          </div>
        </div>
      ) : (
        <div className='flex flex-col justify-center mt-[63px]'>
          <Paragraph />
          <div className='flex flex-col w-full min-w-[1200px] p-[32px] bg-[#fff] mb-[80px] rounded-lg'>
            <Parametar formData={formData} setFormData={setFormData} errors={errors} />
            <Details formData={formData} setFormData={setFormData} errors={errors} />
            <PlaceOfTransaction formData={formData} setFormData={setFormData} errors={errors} />
            <Contacts formData={formData} setFormData={setFormData} errors={errors} />
            <SubmitButtons onSubmit={onSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};
