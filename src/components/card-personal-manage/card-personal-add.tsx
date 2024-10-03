import { ChangeEvent, useEffect, useState } from 'react';
import Button from '../button';
import ControlButton from '../controls-button';
import { useAppDispatch, useAppSelector } from '../../services/type-service';
import { API_URL } from '../../services/api';
import { addTeacher, addTeacherPhoto, getTeachers } from '../../store/thunk/studio';

type TAddFormProps = {
  onClick?: () => void;
};

const CardPersonalAddForm = ({ onClick }: TAddFormProps) => {
  const dispatch = useAppDispatch();
  const currentTeacherData = useAppSelector((state) => state.studio.currentTeacherData);
  const [isPhotoLoad, setIsPhotoLoad] = useState(false);

  //начальные данные
  const [previewImage, setPreviewImage] = useState(
    currentTeacherData ? `${API_URL}${currentTeacherData?.photoTeachers}` : null
  );
  const [nameTeacher, setNameTeacher] = useState('');
  const [descriptionTeacher, setDescriptionTeacher] = useState('');

  //сначала проверяем фотографию
  const [errorDownload, serErrorDownload] = useState('');
  const [isValid, setIsValid] = useState(true);
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
      serErrorDownload('Допустимы файлы формата jpg, размер до 200х200');
      setPreviewImage('');
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
  // Отправка фотографии на сервер
  useEffect(() => {
    if (isValid && file) {
      dispatch(addTeacherPhoto({ photoTeachers: file })).unwrap();
      setIsPhotoLoad(true);
    }
  }, [isValid, file]);

  //отправка данных о преподавателе на сервер
  const sendTeacherData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (currentTeacherData && isPhotoLoad) {
      const idTeachers = currentTeacherData.idTeachers;
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
  //проверка все ли поля заполнены
  const [isValidForm, setIsValidForm] = useState(false);
  useEffect(() => {
    if (isPhotoLoad && nameTeacher && descriptionTeacher) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [isPhotoLoad, nameTeacher, descriptionTeacher]);

  return (
    <div className='card-personal__manager card-add'>
      <div className='card-personal__manager-control'>
        <ControlButton id='close' onClick={onClick} />
      </div>
      <form className='card-personal__manager-form' encType='multipart/form-data'>
        <label htmlFor='photoTeacher' className='card-personal__manager-download'>
          Добавить фото
          <input
            type='file'
            name='photoTeacher'
            id='photoTeacher'
            onChange={handleFileChange}
          />
          {previewImage && previewImage !== null && previewImage !== '' && (
            <img src={previewImage} alt='Preview' />
          )}
        </label>
        {errorDownload && <p className='card-personal__manager-error'>{errorDownload}</p>}
        <div className='card-personal__manager-item-data'>
          <>
            <textarea
              name='title'
              id='title'
              rows={1}
              placeholder='Имя и фамилия'
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
                disabled={!isValidForm}
                classList={!isValidForm ? 'disabled' : 'button--save'}
                openModalForm={sendTeacherData}
              />
              <Button
                text='Отменить'
                classList='button--cancel'
                openModalForm={onClick}
              />
            </div>
          </>
        </div>
      </form>
    </div>
  );
};

export default CardPersonalAddForm;
