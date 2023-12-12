import css from "./styles.module.scss";
import sprite from "../../../../assets/sprite.svg";
import { ChangeEvent, useState } from "react";

function ProfileImg() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [errorDownload, serErrorDownload] = useState("");

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    serErrorDownload("");

    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    // Проверяем формат файла
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(file.name)) {
      serErrorDownload("Допустимы файлы формата jpeg, jpg и png");
      return;
    }
    // Создаем объект FileReader
    const reader = new FileReader();

    // Событие, которое происходит после завершения чтения файла
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };

    // Чтение файла в формате DataURL
    reader.readAsDataURL(file);
  };

  return (
    <fieldset className={css.profileImg}>
      <label htmlFor="photouser" className={css.download}>
        <input
          type="file"
          name="photo"
          id="photouser"
          onChange={handleImageUpload}
        />

        <div className={css.controls}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref={`${sprite}#note`}></use>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref={`${sprite}#trash`}></use>
          </svg>
        </div>
        {previewImage ? <img src={previewImage} alt="Preview" /> : ""}
      </label>
      {errorDownload && <p className={css.errorMessage}>{errorDownload}</p>}
    </fieldset>
  );
}

export default ProfileImg;
