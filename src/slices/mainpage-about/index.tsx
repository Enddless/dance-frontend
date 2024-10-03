import classNames from 'classnames';
import { useAppSelector } from '../../services/type-service';
import { useEffect, useState } from 'react';
import { LoadingStatus } from '../../const/const';
import TitleSection from '../../components/title';
import Spinner from '../../components/spinner';
import CardHalls from '../../components/CardHalls';
import { Guide } from '../../components/guide';

export const AboutSlice = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const atelieData = main?.Atelie;
  const description = atelieData?.description;
  const hallsData = main?.Halls;

  const lengthMoreDefault = hallsData && hallsData?.length > 3;
  const classNameList = classNames('main-about__list', {
    'main-about__tile': lengthMoreDefault
  });

  const statusStudio = useAppSelector((state) => state.main.isStudioDataLoading);
  const statusHalls = useAppSelector((state) => state.main.isHallsLoading);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    if (statusStudio === LoadingStatus.Pending || statusHalls === LoadingStatus.Pending) {
      setIsLoad(false);
    } else {
      setIsLoad(true);
    }
  }, [statusHalls, statusStudio]);

  return (
    <section className='section main-about'>
      <TitleSection title='О студии' cls='main-about__title' />
      {!isLoad ? (
        <div className='main-about__spinnerContainer'>
          <Spinner />
        </div>
      ) : (
        <>
          <div className='main-about__text'>
            <p style={{ whiteSpace: 'pre-line' }}>
              {atelieData ? `${description}` : <Guide link='about' />}
            </p>
          </div>
          <ul className={classNameList}>
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
              <Guide link='halls' />
            )}
          </ul>
        </>
      )}
    </section>
  );
};
