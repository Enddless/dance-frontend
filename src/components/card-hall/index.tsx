import classNames from 'classnames';
import { API_URL } from '../../services/api';
import { HallData } from '../../interfaces/interfaces';

interface ICardProps {
  hall: HallData;
  isMainPage?: boolean;
}

const CardHalls = ({ hall, isMainPage }: ICardProps) => {
  const classNameList = classNames('card-halls__item', {
    'card-halls__item--grid': isMainPage
  });

  return (
    <li key={hall.IdHall} className={classNameList}>
      <div className='card-halls__item-photoContainer'>
        <img
          src={`${API_URL}${hall.PhotoHall}`}
          alt='Galerry'
          className='card-halls__item-photo'
        />
        <h3 className='card-halls__item-caption'>{hall.Title}</h3>
      </div>
      <p>{hall.Description}</p>
    </li>
  );
};

export default CardHalls;
