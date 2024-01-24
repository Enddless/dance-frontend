import { ChangeEvent, useEffect, useState } from "react";
import css from "./styles.module.scss";
import {
  aboutStudio,
  changeLogotype,
} from "../../../../../../services/thunk/studio";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../services/type-service";
import { API_URL } from "../../../../../../services/api";

const LogotypeSettings = () => {
  const dispatch = useAppDispatch();
  const logotypeData = useAppSelector(
    (state) => state.studio.aboutStudioData
  )?.photoLogo;
  const [logotype, setLogotype] = useState(logotypeData);
  const [errorDownload, serErrorDownload] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [file, setFile] = useState<File>();
  const [previewImage, setPreviewImage] = useState(
    logotypeData !== "" ? `${API_URL}${logotypeData}` : null
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    serErrorDownload("");

    const selectFile = event.target.files && event.target.files[0];
    if (!selectFile) {
      return;
    }
    // Проверяем формат файла
    const allowedExtensions = /(\.jpg|\.png)$/i;
    if (!allowedExtensions.exec(selectFile.name)) {
      serErrorDownload("Допустимы файлы формата png,jpg, размер до 512x512");
      setIsValid(false);
      setPreviewImage("");
    } else {
      setIsValid(true);
      setFile(selectFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setPreviewImage(base64Image);
      };
      reader.readAsDataURL(selectFile);
    }
  };
  // Отправка логотипа на сервер
  useEffect(() => {
    if (isValid && file) {
      dispatch(changeLogotype({ photoLogo: file }))
        .unwrap()
        .then(() => {
          dispatch(aboutStudio());
        });
    }
  }, [isValid, file, dispatch]);

  // Обновление состояния логотипа при изменении данных в хранилище
  useEffect(() => {
    setLogotype(logotypeData);
  }, [logotypeData]);

  // Обновление previewImage при изменении file
  useEffect(() => {
    if (logotypeData !== "") {
      setPreviewImage(`${API_URL}${logotypeData}?${Date.now()}`);
    }
  }, [logotypeData]);

  return (
    <>
      <div className={css.container}>
        {logotype ? (
          <div className={css.card} id="logotype">
            <p className={css.title}>Текущий логотип:</p>
            {previewImage && previewImage !== "" && (
              <img src={previewImage} alt="logotype" />
            )}
          </div>
        ) : (
          <>
            <p>
              У вас еще нет логотипа. Вы можете добавить его нажав кнопку
              "Добавить"
            </p>
          </>
        )}
      </div>
      <form className={css.add} encType="multipart/form-data">
        {logotype ? (
          <label htmlFor="reloadLogotype" className={css.download}>
            Обновить
            <input
              type="file"
              name="reloadLogotype"
              id="reloadLogotype"
              onChange={handleFileChange}
            />
          </label>
        ) : (
          <label htmlFor="logotype" className={css.download}>
            Добавить
            <input
              type="file"
              name="logotype"
              id="logotype"
              key={logotypeData}
              onChange={handleFileChange}
            />
          </label>
        )}
        {errorDownload && <p className={css.errorMessage}>{errorDownload}</p>}
      </form>
    </>
  );
};

export default LogotypeSettings;
