import { ChangeEvent, useEffect, useState } from 'react';
import ControlButton from '../../../components/controls-button';
import { changeBanner, deleteBanner, getBanners } from '../../../store/thunk/studio';
import { useAppDispatch, useAppSelector } from '../../../services/type-service';
import { API_URL } from '../../../services/api';

const BannersSettingsSlice = () => {
  const dispatch = useAppDispatch();
  const bannerData = useAppSelector((state) => state.studio.bannersData);
  const [banner, setBanner] = useState(bannerData);
  const [errorDownload, serErrorDownload] = useState('');
  const [isValid, setIsValid] = useState(true);
  //изменение состояния фотографии
  const [file, setFile] = useState<File>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    serErrorDownload('');

    const selectFile = event.target.files && event.target.files[0];
    if (!selectFile) {
      return;
    }
    // Проверяем формат файла
    const allowedExtensions = /(\.jpg)$/i;
    if (!allowedExtensions.exec(selectFile.name)) {
      serErrorDownload('Допустимы файлы формата jpg, размер до 1434x345');
      setIsValid(false);
    } else {
      setIsValid(true);
      setFile(selectFile);
    }
  };
  // Отправка банера на сервер
  useEffect(() => {
    if (isValid && file) {
      dispatch(changeBanner({ PhotoBanner: file }))
        .unwrap()
        .then(() => {
          dispatch(getBanners());
        });
    }
  }, [isValid, file, dispatch]);

  // Получение данных о баннерах из сервера
  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  // Обновление состояния баннеров при изменении данных в хранилище
  useEffect(() => {
    setBanner(bannerData);
  }, [bannerData]);
  //удаление банера
  const deleteCurrentBanner = (IdBanner: number) => {
    dispatch(deleteBanner({ IdBanner }))
      .unwrap()
      .then(() => dispatch(getBanners()));
  };

  return (
    <>
      <div className='admin__content-banners admin-banners'>
        {banner ? (
          <>
            {banner.map((card) => (
              <div className='admin-banners__card' key={card.IdBanner}>
                <div className='admin-banners__control'>
                  <ControlButton
                    id='delete'
                    onClick={() => deleteCurrentBanner(card.IdBanner)}
                  />
                </div>
                <img src={`${API_URL}${card.PhotoBanner}?v=1`} alt='Баннер' />
              </div>
            ))}
          </>
        ) : (
          <p>У вас еще нет баннеров. Вы можете добавить, нажав кнопку "Добавить"</p>
        )}
      </div>
      <form className='admin-banners__add'>
        <label htmlFor='banner' className='admin-banners__button button button--save'>
          Добавить
          <input type='file' name='banner' id='banner' onChange={handleFileChange} />
        </label>
        {errorDownload && (
          <p className='admin-banners__error error-message'>{errorDownload}</p>
        )}
      </form>
    </>
  );
};

export default BannersSettingsSlice;
