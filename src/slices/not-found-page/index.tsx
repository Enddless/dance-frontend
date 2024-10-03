import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/route';
import nf from 'public/images/not-found/NF.png';

export const NotFoundSlice = () => {
  return (
    <section className='not-found'>
      <div className='not-found__inner container'>
        <h1 className='not-found__title'>Извините, страница не найдена</h1>
        <div className='not-found__info grid grid--12'>
          <p className='not-found__text'>Но есть другие</p>
          <Link to={AppRoute.Root} className='not-found__link'>
            <p>Главная страница</p>
          </Link>
          <img src={nf} alt='Не найдено' className='not-found__image' />
        </div>
      </div>
    </section>
  );
};
