import css from "./styles.module.scss";
import Button from "../../../../../../components/Button/Button";
// import { hallsData } from "../../../../../../mocks/mocks";
import CardHalls from "../../../../../../components/CardHalls";
import ControlButton from "../../../../../../components/controls-button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../services/type-service";
import { useEffect, useState } from "react";
import { deleteHall, getHalls } from "../../../../../../services/thunk/studio";
import AddHallForm from "./components/addHallForm";
import EditHallForm from "./components/editHallForm";

const Halls = () => {
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
      <div className={css.container}>
        {halls !== null ? (
          <>
            {halls.map((hall) => {
              return (
                <div className={css.card} key={hall.IdHall}>
                  <div className={css.controlGroup}>
                    <ControlButton
                      id="edit"
                      onClick={() => handleEditCard(hall.IdHall)}
                    />
                    <ControlButton
                      id="delete"
                      onClick={() => deleteCurrentHall(hall.IdHall)}
                    />
                  </div>
                  <CardHalls hall={hall} />
                </div>
              );
            })}
          </>
        ) : (
          <p className={css.text}>
            У вас еще нет залов. Вы можете добавить зал нажав кнопку "Добавить"
          </p>
        )}
      </div>
      <div className={css.add}>
        <Button
          text="Добавить"
          cls="add"
          openModalForm={() => setAddHallForm(!addHallForm)}
        />
      </div>
      {addHallForm && (
        <AddHallForm onClick={() => setAddHallForm(!addHallForm)} />
      )}
      {editHallForm && (
        <EditHallForm
          onClick={() => setEditHallForm(!editHallForm)}
          id={currentEditHall}
        />
      )}
    </>
  );
};

export default Halls;
