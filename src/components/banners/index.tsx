import { Link } from 'react-router-dom';
import SliderBlock from '../../../../components/Slider/SliderBlock';

import css from './styles.module.scss';

import Spinner from '../spinner';
import { AppRoute } from '../../const/route';

const Banners = () => {
  return (
    <section className={css.banners}>
      <div className={css.spinnerContainer}>
        <Spinner />
      </div>

      {bannerUrl ? (
        <SliderBlock cards={bannerUrl} />
      ) : (
        <p className={css.atention}>
          Здесь еще нет баннеров. Добавить их можно в личном кабинете
          <Link to={`${AppRoute.AdministratorArea}/news`}> администратора</Link>
        </p>
      )}
    </section>
  );
};

export default Banners;
