import sprite from 'public/icons/sprite.svg';
import classNames from 'classnames';
import { PriceData } from '../../interfaces/interfaces';

interface ICardProps {
  price: PriceData;
  cls?: string;
  isMainPage?: boolean;
}

const CardPrice = ({ price, cls, isMainPage }: ICardProps) => {
  const isNoneShadow = cls === 'noneShadow';
  const classNameList = classNames('card-prices__item', {
    'card-prices__item-noneShadow': isNoneShadow,
    'card-prices__item-redisignBlock': isMainPage
  });
  const contentGroup = classNames({
    'card-prices__item-redisignCheckboxGroup': isMainPage
  });

  return (
    <li className={classNameList}>
      {price && (
        <>
          <h4 className='card-prices__item-subtitle'>{price.title}</h4>
          <div className={contentGroup}>
            <div className='card-prices__item-checkboxGroup'>
              {price.descriptionOne !== '' && (
                <div className='card-prices__item-checkbox'>
                  <div>
                    <svg width='24' height='24' viewBox='0 0 24 24'>
                      <use xlinkHref={`${sprite}#checkForPrice`}></use>
                    </svg>
                  </div>
                  <p className='card-prices__item-textCheck'>{price.descriptionOne}</p>
                </div>
              )}
              {price.descriptionTwo !== '' && (
                <div className='card-prices__item-checkbox'>
                  <div>
                    <svg width='24' height='24' viewBox='0 0 24 24'>
                      <use xlinkHref={`${sprite}#checkForPrice`}></use>
                    </svg>
                  </div>
                  <p className='card-prices__item-textCheck'>{price.descriptionTwo}</p>
                </div>
              )}
              {price.descriptionThree !== '' && (
                <div className='card-prices__item-checkbox'>
                  <div>
                    <svg width='24' height='24' viewBox='0 0 24 24'>
                      <use xlinkHref={`${sprite}#checkForPrice`}></use>
                    </svg>
                  </div>
                  <p className='card-prices__item-textCheck'>{price.descriptionThree}</p>
                </div>
              )}
            </div>

            <h4 className='card-prices__item-subtitle'>{price.price} P</h4>
          </div>
        </>
      )}
    </li>
  );
};

export default CardPrice;
