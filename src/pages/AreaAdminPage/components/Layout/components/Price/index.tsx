import { useEffect, useState } from "react";
import Button from "../../../../../../components/Button/Button";
import CardPrice from "../../../../../../components/CardPrice";
import ControlButton from "../../../../../../components/controls-button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../services/type-service";
import css from "./styles.module.scss";
import { deletePrice, getPrice } from "../../../../../../services/thunk/studio";
import AddPriceForm from "./component/addPriceForm";

const PriceSettings = () => {
  const dispatch = useAppDispatch();
  const priceData = useAppSelector((state) => state.studio.priceData);
  // Получение данных об абонементах из сервера
  useEffect(() => {
    dispatch(getPrice());
  }, [dispatch]);

  const [addPriceForm, setAddPriceForm] = useState(false);
  //удаление преподавателя
  const deleteCurrentPrice = (idPrice: number) => {
    dispatch(deletePrice({ idPrice }))
      .unwrap()
      .then(() => dispatch(getPrice()));
  };
  return (
    <>
      <div className={css.container}>
        {priceData ? (
          priceData.map((item) => {
            return (
              <div className={css.card} key={item.title}>
                <div className={css.controlGroup}>
                  <ControlButton id="edit" />
                  <ControlButton
                    id="delete"
                    onClick={() =>
                      deleteCurrentPrice(item.idPrice)
                    }
                  />
                </div>
                <CardPrice price={item} cls="noneShadow" />
              </div>
            );
          })
        ) : (
          <p className={css.text}>
            У вас еще нет абонементов. Вы можете добавить их нажав кнопку
            "Добавить"
          </p>
        )}
      </div>

      <div className={css.add}>
        <Button
          text="Добавить"
          cls="add"
          openModalForm={() => setAddPriceForm(!addPriceForm)}
        />
      </div>
      {addPriceForm && (
        <AddPriceForm onClick={() => setAddPriceForm(!addPriceForm)} />
      )}
    </>
  );
};

export default PriceSettings;
