import { useEffect, useState } from 'react';
import ControlButton from '../../../components/controls-button';
import { useAppDispatch, useAppSelector } from '../../../services/type-service';
import { aboutStudio, changeAboutStudio } from '../../../store/thunk/studio';

const AboutSettingsSlice = () => {
  const dispatch = useAppDispatch();
  const aboutStudioData = useAppSelector((state) => state.studio.aboutStudioData);

  const [description, setDescription] = useState(
    aboutStudioData && aboutStudioData.description !== null
      ? aboutStudioData.description
      : "У вас еще нет описания. Изменить описание можно нажав на иконку 'Карандаш'"
  );
  const [isActive, setIsActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Отправка описания на сервер
  const handleBlur = () => {
    dispatch(changeAboutStudio(description))
      .unwrap()
      .then(() => dispatch(aboutStudio()));
    setIsEditing(false);
    setIsActive(false);
  };
  // Обновление состояния описания при изменении даных в хранилище
  useEffect(() => {
    if (aboutStudioData && aboutStudioData.description !== null) {
      setDescription(aboutStudioData.description);
    }
  }, [aboutStudioData]);

  const deleteData = () => {
    setDescription('');
    setIsEditing(false);
  };
  return (
    <>
      <div className='admin__content-about admin-about'>
        <div className='admin-about__control-group'>
          <ControlButton
            id='edit'
            onClick={() => {
              setIsEditing(true);
              setIsActive(true);
            }}
            isActive={isActive}
          />
          <ControlButton id='delete' onClick={deleteData} />
        </div>
        {isEditing ? (
          <textarea
            rows={25}
            value={description}
            onBlur={handleBlur}
            onChange={(e) => setDescription(e.target.value)}
            className='admin-about__edit-text'
          />
        ) : (
          <>
            <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
          </>
        )}
      </div>
    </>
  );
};

export default AboutSettingsSlice;
