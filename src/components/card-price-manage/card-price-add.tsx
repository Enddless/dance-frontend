import { useEffect, useState } from 'react';
import Button from '../button';
import ControlButton from '../controls-button';
import {
  useAppDispatch
  // useAppSelector,
} from '../../services/type-service';
import { addPrice, getPrice } from '../../store/thunk/studio';

type TAddFormProps = {
  onClick?: () => void;
};

const CardPriceAddForm = ({ onClick }: TAddFormProps) => {
  const dispatch = useAppDispatch();
  // const pricesData = useAppSelector((state) => state.studio.priceData);
  const [titleTicket, setTitleTicket] = useState('');
  const [descriptionOne, setDescriptionOne] = useState('');
  const [descriptionTwo, setDescriptionTwo] = useState('');
  const [descriptionThree, setDescriptionThree] = useState('');
  const [priceTictket, setPriceTicket] = useState(0);
  //отправка данных об абонементе на сервер
  const sendTicketData = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const title = titleTicket;
    const price = priceTictket;
    dispatch(
      addPrice({
        title,
        descriptionOne,
        descriptionTwo,
        descriptionThree,
        price
      })
    )
      .unwrap()
      .then(() => dispatch(getPrice()))
      .then(() => {
        if (onClick) onClick();
      });
  };
  //проверка все ли поля заполнены
  const [isValidForm, setIsValidForm] = useState(false);
  useEffect(() => {
    if (
      titleTicket &&
      priceTictket &&
      (descriptionOne || descriptionTwo || descriptionThree)
    ) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [titleTicket, descriptionOne, descriptionTwo, descriptionThree, priceTictket]);

  return (
    <div className='card-price__manager card-add'>
      <div className='card-price__manager-control'>
        <ControlButton id='close' onClick={onClick} />
      </div>
      <form className='card-price__manager-form'>
        <div className='card-price__manager-item-data'>
          <>
            <textarea
              name='titleTicket'
              id='titleTicket'
              rows={1}
              placeholder='Добавить название абонемента'
              value={titleTicket}
              onChange={(e) => setTitleTicket(e.target.value)}
            />
            <textarea
              name='descriptionOne'
              id='descriptionOne'
              rows={2}
              placeholder='Добавить описание'
              value={descriptionOne}
              onChange={(e) => setDescriptionOne(e.target.value)}
            />
            <textarea
              name='descriptionTwo'
              id='descriptionTwo'
              rows={2}
              placeholder='Добавить описание'
              value={descriptionTwo}
              onChange={(e) => setDescriptionTwo(e.target.value)}
            />
            <textarea
              name='descriptionThree'
              id='descriptionThree'
              rows={2}
              placeholder='Добавить описание'
              value={descriptionThree}
              onChange={(e) => setDescriptionThree(e.target.value)}
            />
            <input
              name='price'
              id='price'
              placeholder='Добавить стоимость'
              value={priceTictket}
              onChange={(e) => setPriceTicket(Number(e.target.value))}
            />
            <div className='card-price__manager-buttonGroup'>
              <Button
                text='Сохранить'
                disabled={!isValidForm}
                classList={!isValidForm ? 'disabled' : 'button--save'}
                openModalForm={sendTicketData}
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

export default CardPriceAddForm;
