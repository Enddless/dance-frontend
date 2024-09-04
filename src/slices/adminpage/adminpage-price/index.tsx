import { useEffect, useState } from 'react';
import Button from '../../../components/button';
import CardPrice from '../../../components/card-price';
import ControlButton from '../../../components/controls-button';
import { useAppDispatch, useAppSelector } from '../../../services/type-service';
import { deletePrice, getPrice } from '../../../store/thunk/studio';
import { Modal } from '../../../components/modal-form';
import CardPriceAddForm from '../../../components/card-price-manage/card-price-add';
// import EditPriceForm from "./component/editPriceForm";

const PriceSettingsSlice = () => {
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

  //редактирование конкретной карточки
  // const [editPriceForm, setEditPriceForm] = useState(false);
  // const [currentEditPrice, setCurrentEditPrice] = useState(0);
  // const handleEditCard = (id: number) => {
  //   setEditPriceForm(!editPriceForm);
  //   setCurrentEditPrice(id);
  // };
  return (
    <>
      <div className='admin-page__price'>
        {priceData ? (
          <ul className='admin-page__price-list price-list grid grid--12'>
            {priceData.map((item) => {
              return (
                <div className='admin-page__price-item-wrapper' key={item.title}>
                  <div className='admin-page__price-controlGroup'>
                    {/* <ControlButton id="edit" onClick={() => handleEditCard(item.idPrice)} /> */}
                    <ControlButton
                      id='delete'
                      onClick={() => deleteCurrentPrice(item.idPrice)}
                    />
                  </div>
                  <CardPrice price={item} cls='noneShadow' />
                </div>
              );
            })}
          </ul>
        ) : (
          <p className='admin-page__price-text'>
            У вас еще нет абонементов. Вы можете добавить их нажав кнопку "Добавить"
          </p>
        )}
      </div>

      <div className='admin-page__price-add'>
        <Button
          text='Добавить'
          cls='add'
          openModalForm={() => setAddPriceForm(!addPriceForm)}
        />
      </div>
      {addPriceForm && (
        <Modal>
          <CardPriceAddForm onClick={() => setAddPriceForm(!addPriceForm)} />
        </Modal>
      )}
      {/* {editPriceForm && (
        <EditPriceForm
          onClick={() => setEditPriceForm(!editPriceForm)}
          id={currentEditPrice}
        />
      )} */}
    </>
  );
};

export default PriceSettingsSlice;
