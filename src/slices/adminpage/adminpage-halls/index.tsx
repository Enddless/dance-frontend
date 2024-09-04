import Button from '../../../components/button';
import CardHalls from '../../../components/card-hall';
import ControlButton from '../../../components/controls-button';
import { useAppDispatch, useAppSelector } from '../../../services/type-service';
import { useEffect, useState } from 'react';
import { deleteHall, getHalls } from '../../../store/thunk/studio';
import { Modal } from '../../../components/modal-form';
import CardHallAddForm from '../../../components/card-hall-manage/card-hall-add';
import CardHallEditForm from '../../../components/card-hall-manage/card-hall-edit';

const HallsSettingsSlice = () => {
  const dispatch = useAppDispatch();
  const hallsData = useAppSelector((state) => state.studio.hallsData);
  const [halls, setHalls] = useState(hallsData);
  const [addHallForm, setAddHallForm] = useState(false);
  const [editHallForm, setEditHallForm] = useState(false);
  const [currentEditHall, setCurrentEditHall] = useState(0);
  // Получение данных о залах из сервера
  useEffect(() => {
    dispatch(getHalls());
  }, [dispatch]);

  //удаление зала
  const deleteCurrentHall = (IdHall: number) => {
    dispatch(deleteHall({ IdHall }))
      .unwrap()
      .then(() => dispatch(getHalls()));
  };
  //Обновление состояния баннеров при изменении данных в хранилище
  useEffect(() => {
    setHalls(hallsData);
  }, [hallsData]);

  //редактирование конкретной карточки
  const handleEditCard = (id: number) => {
    setEditHallForm(!editHallForm);
    setCurrentEditHall(id);
  };

  return (
    <>
      {/* <p>Редактирование карточек пока работает без изменения фотки</p> */}
      <div className='admin-page__halls grid grid--12'>
        {halls !== null ? (
          <>
            {halls.map((hall) => {
              return (
                <div className='admin-page__halls-cardwrapper' key={hall.IdHall}>
                  <div className='admin-page__halls-controlGroup'>
                    <ControlButton
                      id='edit'
                      onClick={() => handleEditCard(hall.IdHall)}
                    />
                    <ControlButton
                      id='delete'
                      onClick={() => deleteCurrentHall(hall.IdHall)}
                    />
                  </div>
                  <CardHalls hall={hall} />
                </div>
              );
            })}
          </>
        ) : (
          <p className='admin-page__halls-text'>
            У вас еще нет залов. Вы можете добавить зал нажав кнопку "Добавить"
          </p>
        )}
      </div>
      <div className='admin-page__halls-add'>
        <Button
          text='Добавить'
          cls='add'
          openModalForm={() => setAddHallForm(!addHallForm)}
        />
      </div>
      {addHallForm && (
        <Modal>
          <CardHallAddForm onClick={() => setAddHallForm(!addHallForm)} />
        </Modal>
      )}
      {editHallForm && (
        <Modal>
          <CardHallEditForm
            onClick={() => setEditHallForm(!editHallForm)}
            id={currentEditHall}
          />
        </Modal>
      )}
    </>
  );
};

export default HallsSettingsSlice;
