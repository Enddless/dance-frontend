import css from "./styles.module.scss";
import sprite from "../../../../assets/sprite.svg";
import { ChangeEvent, useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/type-service";
import {
  changeUserPhoto,
  getCurrentUserData,
} from "../../../../services/thunk/auth";
import { API_URL } from "../../../../services/api";

function ProfileImg() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.userData);
  const [previewImage, setPreviewImage] = useState("");
  const [errorDownload, serErrorDownload] = useState("");
  const [isValid, setIsValid] = useState(true);

  //изменение состояния фотографии
  const [file, setFile] = useState<File>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    serErrorDownload("");

    const selectFile = event.target.files && event.target.files[0];
    if (!selectFile) {
      return;
    }
    // Проверяем формат файла
    const allowedExtensions = /(\.jpg)$/i;
    if (!allowedExtensions.exec(selectFile.name)) {
      serErrorDownload("Допустимы файлы формата jpg, размер до 512х512");
      setPreviewImage("");
      setIsValid(false);
    } else {
      setIsValid(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setPreviewImage(base64Image);
        setFile(selectFile);
      };
      // Чтение файла в формате DataURL
      reader.readAsDataURL(selectFile);
    }
  };

  //отправка фотографии на сервер
  // const handleImageUpload = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  const handleImageUpload = () => {
    if (isValid && file && previewImage) {
      dispatch(changeUserPhoto({ photoUser: file }))
        .unwrap()
        .then(() => {
          dispatch(getCurrentUserData());
        });
    }
  };

  //обновление фотографии на странице
  useEffect(() => {
    if (userData) {
      const imageSrc = `${API_URL}${userData.photoUser}`;
      setPreviewImage(imageSrc);
    }
  }, [userData]);

  return (
    <form
      className={css.profileImg}
      encType="multipart/form-data"
      // onSubmit={handleImageUpload}
    >
      <label htmlFor="photoUser" className={css.download}>
        <input
          type="file"
          name="photoUser"
          id="photoUser"
          onChange={handleFileChange}
        />

        <div className={css.controls}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref={`${sprite}#note`}></use>
          </svg>
        </div>
        {previewImage ? (
          <img src={previewImage} alt="Preview" onLoad={handleImageUpload} />
        ) : (
          ""
        )}
      </label>
      <div className={css.controls}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use xlinkHref={`${sprite}#trash`}></use>
        </svg>
      </div>
      {errorDownload && <p className={css.errorMessage}>{errorDownload}</p>}
      {/* <button className={css.submit} type="submit">
        Send
      </button> */}
    </form>
  );
}

export default ProfileImg;
