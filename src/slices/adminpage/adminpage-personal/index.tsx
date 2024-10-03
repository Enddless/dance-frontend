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
      <div className='admin__content-personal admin-personal'>
        {teachers !== null ? (
          <ul className='admin-personal__list personal-list grid grid--2'>
            {teachers.map((teacher) => (
              <li key={teacher.idTeachers} className='admin-personal__item-wrapper'>
                <div className='admin-personal__control-group'>
                  <ControlButton
                    id='edit'
                    onClick={() => handleEditCard(teacher.idTeachers)}
                  />
                  <ControlButton
                    id='delete'
                    onClick={() => deleteCurrenTeacher(teacher.idTeachers)}
                  />
                </div>
                <CardPersonal teacher={teacher} prefixClass='admin-personal' />
              </li>
            ))}
          </ul>
        ) : (
          <p className='admin-personal__text'>
            У вас еще нет персонала. Вы можете добавить преподавателя, нажав кнопку
            "Добавить"
          </p>
        )}
      </div>
      <div className='admin-personal__add'>
        <Button
          text='Добавить'
          classList='admin-personal__button button--add'
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
