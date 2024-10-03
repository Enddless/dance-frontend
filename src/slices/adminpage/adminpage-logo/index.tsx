import { ChangeEvent, useEffect, useState } from 'react';
import { aboutStudio, changeLogotype } from '../../../store/thunk/studio';
import { useAppDispatch, useAppSelector } from '../../../services/type-service';
import { API_URL } from '../../../services/api';
import ControlButton from '../../../components/controls-button';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const/route';

export const LogotypeSettingsSlice = () => {
  const dispatch = useAppDispatch();
  const logotypeData = useAppSelector((state) => state.studio.aboutStudioData)?.photoLogo;
  const [logotype, setLogotype] = useState(logotypeData);
  // const [logotype, setLogotype] = useState("");
  const [errorDownload, serErrorDownload] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [file, setFile] = useState<File>();
  const [previewImage, setPreviewImage] = useState(
    logotypeData !== '' ? `${API_URL}${logotypeData}` : null
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    serErrorDownload('');

    const selectFile = event.target.files && event.target.files[0];
    if (!selectFile) {
      return;
    }
    // Проверяем формат файла
    const allowedExtensions = /(\.jpg|\.png)$/i;
    if (!allowedExtensions.exec(selectFile.name)) {
      serErrorDownload('Допустимы файлы формата png,jpg, размер до 512x512');
      setIsValid(false);
      setPreviewImage('');
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
    if (logotypeData !== '') {
      setPreviewImage(`${API_URL}${logotypeData}?${Date.now()}`);
    }
  }, [logotypeData]);

  return (
    <>
      {logotype && logotype !== '' ? (
        <form className='logotype-settings__update-form' encType='multipart/form-data'>
          <label htmlFor='reloadLogotype' className='logotype-settings__update'>
            <ControlButton id='edit' />
            <input
              type='file'
              name='reloadLogotype'
              id='reloadLogotype'
              onChange={handleFileChange}
            />
          </label>

          <div className='logotype-settings__card' id='logotype'>
            <Link to={AppRoute.Root}>
              {previewImage && previewImage !== '' && (
                <img src={previewImage} alt='logotype' />
              )}
            </Link>
          </div>
        </form>
      ) : (
        <form className='logotype-settings__add' encType='multipart/form-data'>
          <label
            htmlFor='logotype'
            className='logotype-settings__download button button--save'>
            Добавить лого
            <input
              type='file'
              name='logotype'
              id='logotype'
              key={logotypeData}
              onChange={handleFileChange}
            />
          </label>
        </form>
      )}

      {errorDownload && (
        <p className='logotype-settings__error-message error-message'>{errorDownload}</p>
      )}
    </>
  );
};
