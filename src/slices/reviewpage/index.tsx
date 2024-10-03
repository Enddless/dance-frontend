import { useState } from 'react';
import { reviewsInfo } from '../../mocks/mocks';
import TitleSection from '../../components/title';
import CardReview from '../../components/CardReview';
import Button from '../../components/Button/Button';

export const ReviewsPageSlice = () => {
  //**********ИЗМЕНЕНИЕ СОСТОЯНИЯ ОТОБРАЖЕНИЯ КОЛИЧЕСТВА ДОКУМЕНТОВ**********
  const [more, setMore] = useState(4);
  const clickMore = () => {
    setMore(more + 2);
  };
  const reviews = reviewsInfo.slice(0, more);
  return (
    <section className='section all-reviews'>
      <TitleSection title='Отзывы' cls='all-reviews__title' />
      <ul className='all-reviews__list'>
        {reviews.map((review) => {
          return <CardReview review={review} key={review.id} />;
        })}
        <div className='all-reviews__buttonGroup'>
          <Button
            text={more === reviews.length ? 'Показать еще' : 'Отзывов больше нет'}
            cls='btn-more'
            openModalForm={clickMore}
          />
        </div>
      </ul>
    </section>
  );
};
