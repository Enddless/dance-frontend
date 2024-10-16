import sprite from 'public/icons/sprite.svg';
import { IReviewsInfo } from '../../interfaces/interfaces';
import ControlButton from '../controls-button';
import classNames from 'classnames';

interface ICardProps {
  review: IReviewsInfo;
  id?: string;
}

const CardReview = ({ review, id }: ICardProps) => {
  const isAdminSettings = id === 'adminSettings';

  const classNamesList = classNames('card-reviews__user', {
    ratingRedisign: isAdminSettings
  });

  return (
    <>
      <li className='card-reviews__item'>
        {review && (
          <>
            {isAdminSettings && (
              <div className='card-reviews__control'>
                <ControlButton id='delete' />
              </div>
            )}
            <div className={classNamesList}>
              <h5 className='card-reviews__name'>{review.data.user}</h5>
              <div className='card-reviews__rating'>
                {Array.from({ length: review?.data.stars }, (_, index) => index).map(
                  (star) => {
                    return (
                      <div key={star}>
                        <svg width='20' height='20' viewBox='0 0 20 20'>
                          <use xlinkHref={`${sprite}#star`}></use>
                        </svg>
                      </div>
                    );
                  }
                )}
                <p>4.8</p>
              </div>
            </div>

            <p className='card-reviews__date'>{review.data.date}</p>
            <p className='card-reviews__description'>{review.data.description}</p>
          </>
        )}
      </li>
    </>
  );
};

export default CardReview;
