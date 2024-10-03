import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/type-service';
import { API_URL } from '../../services/api';
import { addTeacher, getTeachers } from '../../store/thunk/studio';
import ControlButton from '../controls-button';
import Button from '../button';

type TEditFormProps = {
  onClick?: () => void;
  id: number;
};

const CardPersonalEditForm = ({ onClick, id }: TEditFormProps) => {
  const dispatch = useAppDispatch();
  const teachersData = useAppSelector((state) => state.studio.techersData);
  const currentTeacherData = teachersData?.filter((item) => item.idTeachers === id)[0];

  //начальные данные
  const [previewImage, setPreviewImage] = useState('');
  const [nameTeacher, setNameTeacher] = useState('');
  const [descriptionTeacher, setDescriptionTeacher] = useState('');
  useEffect(() => {
    if (currentTeacherData) {
      setPreviewImage(`${API_URL}${currentTeacherData?.photoTeachers}`);
      setNameTeacher(currentTeacherData.teachersName);
      setDescriptionTeacher(currentTeacherData.description);
    }
  }, [currentTeacherData]);

  //проверяем фотографию, если изменилась
  const [errorDownload, serErrorDownload] = useState('');
  // const [isValid, setIsValid] = useState(true);
  // const [file, setFile] = useState<File>();
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
      serErrorDownload('Допустимы файлы формата jpg, размер до 320х252');
      setPreviewImage('');
      // setIsValid(false);
    } else {
      // setIsValid(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setPreviewImage(base64Image);
        // setFile(selectFile);
      };

      // Чтение файла в формате DataURL
      reader.readAsDataURL(selectFile);
    }
  };

  // Отправка фотографии на сервер
  // useEffect(() => {
  //   if (isValid && file) {
  //     dispatch(addHallPhoto({ PhotoHall: file })).unwrap();
  //   }
  // }, [isValid, file]);

  //отправка измененных данных о зале на сервер
  const sendHallData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentTeacherData) {
      const idTeachers = currentTeacherData.idTeachers;
      // const PhotoHall = currentHallData.PhotoHall;
      const teachersName = nameTeacher;
      const description = descriptionTeacher;
      dispatch(addTeacher({ idTeachers, teachersName, description }))
        .unwrap()
        .then(() => dispatch(getTeachers()))
        .then(() => {
          if (onClick) onClick();
        });
    }
  };
  return (
    <div className='card-personal__manager card-edit'>
      <div className='card-personal__manager-control'>
        <ControlButton id='close' onClick={onClick} />
      </div>
      <form className='card-personal__manager-form' encType='multipart/form-data'>
        <label htmlFor='PhotoHall' className='card-personal__manager-download'>
          <input
            type='file'
            name='PhotoHall'
            id='PhotoHall'
            onChange={handleFileChange}
          />
          {previewImage && previewImage !== '' && (
            <div className='photo-container'>
              <div className='photo-container__inner'>
                <div className='photo-container__body'>
                  <img
                    src={previewImage}
                    alt='Preview'
                    className='photo-container__image'
                  />
                </div>
              </div>
            </div>
          )}
        </label>
        {errorDownload && <p className='card-personal__manager-error'>{errorDownload}</p>}
        <div className='card-personal__manager-item-data'>
          <textarea
            name='title'
            id='title'
            rows={2}
            placeholder='Добавить название'
            value={nameTeacher}
            onChange={(e) => setNameTeacher(e.target.value)}
          />
          <textarea
            name='description'
            id='description'
            rows={5}
            placeholder='Добавить описание'
            value={descriptionTeacher}
            onChange={(e) => setDescriptionTeacher(e.target.value)}
          />
          <div className='card-personal__manager-buttonGroup'>
            <Button
              text='Сохранить'
              classList='button--save'
              openModalForm={sendHallData}
            />
            <Button text='Отменить' classList='button--cancel' openModalForm={onClick} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardPersonalEditForm;
