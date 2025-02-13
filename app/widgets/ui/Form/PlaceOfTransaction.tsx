import { CITIES, SectionTitle, Select } from '~/shared';

export const PlaceOfTransaction = ({ formData, setFormData, errors }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevState: any) => ({
      ...prevState,
      city: e.target.value,
    }));
  };

  return (
    <>
      <SectionTitle title='Место сделки' />

      <Select
        title='Выберите город'
        label='Город'
        options={CITIES}
        value={formData.city || ''}
        onChange={handleChange}
        errorMessage={errors?.city}
      />
    </>
  );
};
