import sprite from 'public/icons/sprite.svg';
import TitleSection from '../../../components/title';
import MapBlock from '../../../components/map';
import SocialLinks from '../../../components/soc1al-links';
import { useAppDispatch, useAppSelector } from '../../../services/type-service';
import { useEffect, useState } from 'react';
import src from 'public/images/not-found/NF.png';
import { mainPageData } from '../../../store/thunk/mainPage';
import Spinner from '../../../components/spinner';
import { LoadingStatus } from '../../../const/const';
import { Guide } from '../../../components/guide';

export const ContactsSlice = () => {
  const cityData = useAppSelector((state) => state.main.mainPage?.City);
  const pointsData = useAppSelector((state) => state.main.mainPage?.Points);
  const [CITY, setCity] = useState(cityData);
  const [POINTS, setPoints] = useState(pointsData);

  useEffect(() => {
    if (cityData && pointsData) {
      setCity(cityData);
      setPoints(pointsData);
    }
  }, [cityData, pointsData]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mainPageData());
  }, [dispatch]);

  const statusPoints = useAppSelector((state) => state.main.isPointsLoading);
  const statusCity = useAppSelector((state) => state.main.isCityLoading);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    if (statusCity === LoadingStatus.Pending || statusPoints === LoadingStatus.Pending) {
      setIsLoad(false);
    } else {
      setIsLoad(true);
    }
  }, [statusPoints, statusCity]);

  return (
    <section className='section main-contacts' id='contactsBlock'>
      <TitleSection title='Контакты' cls='main-contacts__title' />
      {!isLoad ? (
        <div className='main-contacts__spinnerContainer'>
          <Spinner />
        </div>
      ) : (
        <>
          {CITY?.lat && CITY?.lng && POINTS?.lat && POINTS?.lng ? (
            <MapBlock key={CITY.lat} CITY={CITY} POINTS={POINTS} />
          ) : (
            <div className='main-contacts__nomap'>
              <Guide link='contacts' />

              <img src={src} alt='oops, no map here yet' />
            </div>
          )}

          <div className='main-contacts__info'>
            <div className='main-contacts__info-location'>
              <div>
                <svg width='25' height='25' viewBox='0 0 25 25'>
                  <use xlinkHref={`${sprite}#location`}></use>
                </svg>
              </div>
              <p>{cityData?.title}</p>
            </div>

            <div className='main-contacts__info-phone'>
              <svg width='25' height='25' viewBox='0 0 25 25'>
                <use xlinkHref={`${sprite}#phone`}></use>
              </svg>
              <p>
                <a href='tel:+74957887750'>+7 (495) 788-77-50</a>
              </p>
            </div>

            <div className='main-contacts__info-socialblock'>
              <p>Мы в социальных сетях:</p>
              <SocialLinks />
            </div>
          </div>
        </>
      )}
    </section>
  );
};
