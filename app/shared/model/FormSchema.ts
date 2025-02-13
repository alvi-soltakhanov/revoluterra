import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Название должно быть не менее 2 символов' })
    .regex(/[а-яА-Яa-zA-Z]/, { message: 'Название должно содержать хотя бы одно слово' })
    .refine((value) => !/^\d+$/.test(value), {
      message: 'Название не может состоять только из цифр',
    })
    .refine((value) => !/^\w*\d+\w*$/.test(value), {
      message: 'Название не может быть только артикулом',
    }),

  description: z.string().min(1, { message: 'Описание не должно быть пустым' }),

  price: z.string().regex(/^\d+$/, { message: 'Цена должна содержать только цифры' }),

  photos: z
    .array(z.object({ id: z.string(), src: z.string() }))
    .min(1, { message: 'Добавьте хотя бы одно фото' })
    .max(10, { message: 'Можно загрузить не более 10 фотографий' }),

  videoUrl: z
    .string()
    .url({ message: 'Введите корректную ссылку' })
    .regex(/^http.*[/.]/, { message: "Ссылка должна начинаться с 'http' и содержать '/' и '.'" }),

  city: z.enum(['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Казань', 'Краснодар'], {
    errorMap: () => ({ message: 'Выберите город из списка' }),
  }),

  phone: z.string().regex(/^\d+$/, { message: 'Телефон должен содержать только цифры' }),

  contactMethod: z
    .string()
    .refine((value) => ['phone_and_message', 'phone', 'message'].includes(value), {
      message: 'Выберите способ связи из списка',
    }),
});
