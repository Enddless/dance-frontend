import TitleSection from '../../../components/title';
import { reviewsInfo } from '../../../mocks/mocks';
import CardReview from '../../../components/card-review';
import Button from '../../../components/button';
import { useState } from 'react';

export const ReviewsSlice = () => {
  //**********ИЗМЕНЕНИЕ СОСТОЯНИЯ ОТОБРАЖЕНИЯ КОЛИЧЕСТВА ДОКУМЕНТОВ**********
  const [more, setMore] = useState(4);
  const clickMore = () => {
    setMore(more + 2);
  };
  const reviews = reviewsInfo.slice(0, more);

  return (
    <section className='section main-reviews container' id='reviewsBlock'>
      <TitleSection title='Отзывы' cls='main-reviews__title' />
      <ul className='main-reviews__list card-reviews__list grid grid--4'>
        {reviews.map((review) => {
          return <CardReview review={review} key={review.id} />;
        })}
      </ul>
      <div className='main-reviews__buttons'>
        {more === reviews.length ? (
          <Button
            text='Показать еще'
            classList='all-reviews__button button--more'
            openModalForm={clickMore}
          />
        ) : (
          <Button
            text='Скрыть все'
            classList='all-reviews__button button--more'
            openModalForm={() => setMore(4)}
          />
        )}
      </div>
    </section>
  );
};
