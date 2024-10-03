import TitleSection from '../../../../components/Title/Title';
import css from './About.module.scss';
import CardHalls from '../../../../components/CardHalls';

import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const/route';

import Spinner from '../../../../components/Spinner';

const About = () => {
  return (
    <section className={css.about}>
      <TitleSection title='О студии' />
      {!isLoad ? (
        <div className={css.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <>
          <div className={css.text}>
            <p style={{ whiteSpace: 'pre-line' }}>
              {atelieData ? (
                `${description}`
              ) : (
                <p className={css.atention}>
                  Здесь еще нет описания. Добавить его можно в личном кабинете
                  <Link to={`${AppRoute.AdministratorArea}/about`}> администратора</Link>
                </p>
              )}
            </p>
          </div>
          <div className={classNameList}>
            {hallsData ? (
              hallsData.map((item) => {
                return (
                  <CardHalls
                    hall={item}
                    key={item.IdHall}
                    isMainPage={lengthMoreDefault}
                  />
                );
              })
            ) : (
              <p className={css.atention}>
                Здесь еще нет залов. Добавить их можно в личном кабинете
                <Link to={`${AppRoute.AdministratorArea}/halls`}> администратора</Link>
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default About;
