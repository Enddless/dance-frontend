import EmptyTemplate from '../../../components/empty-template';
import sprite from 'public/icons/sprite.svg';
import Button from '../../../components/button';

const AddReviewSlice = () => {
  const totalVisit = 1;
  return (
    <div className='user-review'>
      {totalVisit > 0 ? (
        <form className='user-review__form'>
          <label>Оставьте свой отзыв и оценку</label>
          <input type='text' placeholder='Имя' />
          <textarea className='user-review__textarea' placeholder='Отзыв' rows={5} />
          <label>Оценка</label>
          <div className='user-review__group-star'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <use xlinkHref={`${sprite}#starTransparent`}></use>
            </svg>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <use xlinkHref={`${sprite}#starTransparent`}></use>
            </svg>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <use xlinkHref={`${sprite}#starTransparent`}></use>
            </svg>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <use xlinkHref={`${sprite}#starTransparent`}></use>
            </svg>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <use xlinkHref={`${sprite}#starTransparent`}></use>
            </svg>
          </div>
          <Button
            text='Отправить отзыв'
            classList='user-review__button button button--save'
          />
        </form>
      ) : (
        <EmptyTemplate>
          <p>
            Для того чтобы оставить отзыв Вам необходимо посетить хотя бы одно занятие.
          </p>
        </EmptyTemplate>
      )}
    </div>
  );
};

export default AddReviewSlice;
