import ControlButton from '../../../components/controls-button';
import Button from '../../../components/button';
import { useAppDispatch, useAppSelector } from '../../../services/type-service';
import { useEffect, useState } from 'react';
import { deleteTeacher, getTeachers } from '../../../store/thunk/studio';
import { Modal } from '../../../components/modal-form';
import { CardPersonal } from '../../../components/card-personal';
import CardPersonalEditForm from '../../../components/card-personal-manage/card-personal-edit';
import CardPersonalAddForm from '../../../components/card-personal-manage/card-personal-add';

const PersonalSettingsSlice = () => {
  const dispatch = useAppDispatch();
  const teachersData = useAppSelector((state) => state.studio.techersData);
  const [teachers, setTeachers] = useState(teachersData);
  const [addTecherForm, setAddTeacherForm] = useState(false);
  const [editTeacherForm, setEditTeacherForm] = useState(false);
  const [currentEditTeacher, setCurrentEditTeacher] = useState(0);
  // Получение данных о преподавателях из сервера
  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  //удаление преподавателя
  const deleteCurrenTeacher = (idTeachers: number) => {
    dispatch(deleteTeacher({ idTeachers }))
      .unwrap()
      .then(() => dispatch(getTeachers()));
  };
  //Обновление состояния преподавателей при изменении данных в хранилище
  useEffect(() => {
    setTeachers(teachersData);
  }, [teachersData]);

  //редактирование конкретной карточки
  const handleEditCard = (id: number) => {
    setEditTeacherForm(!editTeacherForm);
    setCurrentEditTeacher(id);
  };

  return (
    <>
      {/* <p>Редактирование карточки пока работает без изменения фото</p> */}
      <div className='admin-page__personal'>
        {teachers !== null ? (
          <ul className='admin-page__personal-list personal-list grid grid--2'>
            {teachers.map((teacher) => (
              <div key={teacher.idTeachers} className='admin-page__personal-item-wrapper'>
                <div className='admin-page__personal-controlGroup'>
                  <ControlButton
                    id='edit'
                    onClick={() => handleEditCard(teacher.idTeachers)}
                  />
                  <ControlButton
                    id='delete'
                    onClick={() => deleteCurrenTeacher(teacher.idTeachers)}
                  />
                </div>
                <CardPersonal teacher={teacher} prefixClass='admin-page' />
              </div>
            ))}
          </ul>
        ) : (
          <p className='admin-page__personal-text'>
            У вас еще нет персонала. Вы можете добавить преподавателя нажав кнопку
            "Добавить"
          </p>
        )}
      </div>
      <div className='admin-page__personal-add'>
        <Button
          text='Добавить'
          cls='add'
          openModalForm={() => setAddTeacherForm(!addTecherForm)}
        />
      </div>
      {addTecherForm && (
        <Modal>
          <CardPersonalAddForm onClick={() => setAddTeacherForm(!addTecherForm)} />
        </Modal>
      )}
      {editTeacherForm && (
        <Modal>
          <CardPersonalEditForm
            onClick={() => setEditTeacherForm(!editTeacherForm)}
            id={currentEditTeacher}
          />
        </Modal>
      )}
    </>
  );
};

export default PersonalSettingsSlice;
