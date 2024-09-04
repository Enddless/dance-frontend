import { useState } from 'react';
import CardReview from '../../../components/card-review';
import { reviewsInfo } from '../../../mocks/mocks';

const ReviewSettingsSlice = () => {
  const [activeBtn, setActiveBtn] = useState('all');

  return (
    <div className='admin-page__reviews'>
      <div className='admin-page__reviews-inputGroup'>
        <input
          type='radio'
          name='radio'
          id='all'
          className='admin-page__reviews-checkbox'
          checked={activeBtn === 'all'}
          onChange={() => setActiveBtn('all')}
        />
        <label
          htmlFor='all'
          className={`admin-page__reviews-radiolabel ${
            activeBtn === 'all' ? 'active' : ''
          }`}>
          Все отзывы
        </label>

        <input
          type='radio'
          name='radio'
          id='new'
          className='admin-page__reviews-checkbox'
          checked={activeBtn === 'new'}
          onChange={() => setActiveBtn('new')}
        />
        <label
          htmlFor='new'
          className={`admin-page__reviews-radiolabel ${
            activeBtn === 'new' ? 'active' : ''
          }`}>
          Новые
        </label>
      </div>
      {reviewsInfo.map((review) => {
        return <CardReview review={review} key={review.id} id='adminSettings' />;
      })}
    </div>
  );
};

export default ReviewSettingsSlice;
