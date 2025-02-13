import { ChangeEvent } from "react";
import { X, Camera } from "lucide-react";

interface ImageData {
  id: string;
  src: string;
}

interface ImagesUploadProps {
  formData: { photos: ImageData[] };
  setFormData: (updateFn: (prevState: any) => any) => void;
  errorMessage?: string;
}

export const ImagesUpload = ({ formData, setFormData, errorMessage }: ImagesUploadProps) => {
  const handleChangeInputFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    if (formData.photos.length >= 10) {
      alert("Можно загрузить не более 10 фотографий");
      return;
    }

    const maxFileSize = 10 * 1024 * 1024; // 10MB

    const newImages = Array.from(files)
      .map((file) => {
        if (file.size > maxFileSize) {
          alert(`Файл ${file.name} превышает 10MB`);
          return null;
        }

        return {
          id: `${file.name}-${file.size}-${file.lastModified}`,
          src: URL.createObjectURL(file),
        };
      })
      .filter(Boolean) as ImageData[];

    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...newImages].slice(0, 10),
    }));

    event.target.value = ""; // Сбрасываем input
  };

  const deleteImg = (imgIndex: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_: any, index: number) => index !== imgIndex),
    }));
  };

  return (
    <div className="mb-[20px]">
      <div className="flex items-center gap-4 mt-[20px] mb-[10px]">
        {formData.photos.map((img, index) => (
          <div key={img.id} className="relative w-[120px] h-[90px] rounded-lg overflow-hidden shadow-md">
            <img
              src={img.src}
              alt="preview"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              type="button"
              className="absolute top-1 right-1 bg-white p-1 rounded-full text-black shadow-lg"
              onClick={() => deleteImg(index)}
            >
              <X size={14} />
            </button>
          </div>
        ))}
        {formData.photos.length < 10 && (
          <label className="w-[120px] h-[90px] bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 shadow-md">
            <Camera size={28} className="text-gray-500" />
            <input
              name="file"
              type="file"
              className="hidden"
              multiple
              onChange={handleChangeInputFile}
            />
          </label>
        )}
      </div>
      <p className="text-gray-500 text-sm mt-[10px]">{formData.photos.length} из 10</p>
      {errorMessage && formData.photos.length === 0 && (
        <p className="text-red-500 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default ImagesUpload;