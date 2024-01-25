// import { StaffInfo } from "../../../../../../mocks/mocks";
import css from "./styles.module.scss";
import ControlButton from "../../../../../../components/controls-button";
import Button from "../../../../../../components/Button/Button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../services/type-service";
import { useEffect, useState } from "react";
import {
  deleteTeacher,
  getTeachers,
} from "../../../../../../services/thunk/studio";
import { API_URL } from "../../../../../../services/api";
import AddTeacherForm from "./components/addTeacherForm";

const Personal = () => {
  const dispatch = useAppDispatch();
  const teachersData = useAppSelector((state) => state.studio.techersData);
  const [teachers, setTeachers] = useState(teachersData);
  const [addTecherForm, setAddTeacherForm] = useState(false);
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

  return (
    <>
      <p>Редактирование карточки пока не работает</p>
      <div className={css.container}>
        {teachers !== null ? (
          <>
            {teachers.map((teacher) => (
              <div key={teacher.idTeachers} className={css.staffContainer}>
                <div className={css.controlGroup}>
                  <ControlButton id="edit" />
                  <ControlButton
                    id="delete"
                    onClick={() => deleteCurrenTeacher(teacher.idTeachers)}
                  />
                </div>
                <div className={css.staffInfo}>
                  <div className={css.photoContainer}>
                    <div className={css.photoItem}>
                      <div className={css.photoBody}>
                        <img
                          src={`${API_URL}${teacher.photoTeachers}`}
                          alt="staffPhoto"
                          className={css.staffPhoto}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={css.staffDescr}>
                    <h5>{teacher.teachersName}</h5>
                    <p>{teacher.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className={css.text}>
            У вас еще нет персонала. Вы можете добавить преподавателя нажав
            кнопку "Добавить"
          </p>
        )}
      </div>
      <div className={css.add}>
        <Button
          text="Добавить"
          cls="add"
          openModalForm={() => setAddTeacherForm(!addTecherForm)}
        />
      </div>
      {addTecherForm && (
        <AddTeacherForm onClick={() => setAddTeacherForm(!addTecherForm)} />
      )}
    </>
  );
};

export default Personal;
