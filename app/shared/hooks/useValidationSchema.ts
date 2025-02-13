import { useState } from 'react';
import { z, ZodSchema } from 'zod';

interface ValidationResult {
  success: boolean;
}

export const useValidationSchema = <T, D>(schema: ZodSchema<T>, formData: D) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (data: D): ValidationResult => {
    try {
      schema.parse(data);
      return { success: true };
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        err.errors.forEach((e) => {
          newErrors[e.path[0]] = e.message;
        });
        setErrors(newErrors);
        return { success: false };
      }
      return { success: false };
    }
  };

  const handleSubmit = (): ValidationResult => {
    const result = validate(formData);
    console.log(result)
    if (result.success) {
      console.log('Данные прошли валидацию', formData);
    }
    return result;
  };

  return {
    handleSubmit,
    errors,
  };
};
