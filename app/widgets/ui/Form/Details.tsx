import { Input, TextArea, SectionTitle } from "~/shared";
import {ImagesUpload} from "~/widgets";

export const Details = ({ formData, setFormData, errors }: any) => {
  return (
    <div>
      <SectionTitle title="Подробности" />

      <div className="mb-6 grid gap-4 lg:grid-cols-[220px_1fr] lg:gap-2">
        <span className="m-0 font-normal text-dark text-[14px] lg:mt-5">
          Описание объявления
        </span>
        <TextArea
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData((prevState: any) => ({ ...prevState, description: e.target.value }))
          }
          placeholder="Описание объявления *"
          errorMessage={errors.description}
        />
      </div>

       <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-2">
        <span className="m-0 font-normal text-dark text-[14px] lg:mt-8">Цена</span>
        <Input
          type="text"
          name="price"
          value={formData.price}
          onChange={(e) =>
            setFormData((prevState: any) => ({ ...prevState, price: e.target.value }))
          }
          placeholder="₽ *"
          errorMessage={errors.price}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-2">
        <span className="m-0 font-normal text-dark text-[14px] lg:mt-4">Фотографии</span>
        <ImagesUpload formData={formData} setFormData={setFormData} errorMessage={errors.photos} />
      </div>

      <div className="mb-8 grid gap-4 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-2">
        <span className="m-0 font-normal text-dark text-[14px]">Видео</span>
        <Input
          type="text"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={(e) =>
            setFormData((prevState: any) => ({ ...prevState, videoUrl: e.target.value }))
          }
          placeholder="Ссылка на видео"
          errorMessage={errors.videoUrl}
        />
      </div>
    </div>
  );
};