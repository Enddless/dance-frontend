import TitleSection from '../../../components/title';
import { reviewsInfo } from '../../../mocks/mocks';
import CardReview from '../../../components/card-review';

export const ReviewsSlice = () => {
  return (
    <section className='section main-reviews' id='reviewsBlock'>
      <TitleSection title='Отзывы' cls='main-reviews__title' />
      <ul className='main-reviews__list card-reviews__list grid grid--4'>
        {reviewsInfo.slice(0, 4).map((review, index) => {
          return <CardReview key={review.id} review={review} lastChild={index === 3} />;
        })}
      </ul>
    </section>
  );
};
