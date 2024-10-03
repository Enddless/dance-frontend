import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { API_URL } from '../../services/api';
import { BannersData, TeacherData } from '../../interfaces/interfaces';
import { CardPersonal } from '../card-personal';
import { useEffect, useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

interface ISettings {
  dots?: boolean;
  arrow?: boolean;
  variableWidth?: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay?: true;
  autoplaySpeed?: number;
}
const settings: ISettings = {
  dots: true,
  arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000
};

type ICardsProps = {
  cards?: BannersData[];
  staffInfo?: TeacherData[];
};

const SliderBlock = ({ cards, staffInfo }: ICardsProps) => {
  const isBig = useMediaQuery('(min-width: 1920px)');
  const isMedium = useMediaQuery('(min-width: 1200px)');
  const isTablet = useMediaQuery('(min-width: 767px)');

  const [slidesToShow, setSlidesToShow] = useState(getSlidesNumber());

  function getSlidesNumber() {
    if (isBig) return 5;
    if (isMedium) return 3;
    if (isTablet) return 2;
    return 1;
  }

  useEffect(() => {
    setSlidesToShow(getSlidesNumber());
  }, [isBig, isMedium, isTablet]);

  const settingsForStaff: ISettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
    // autoplay: true,
    // autoplaySpeed: 4000
  };

  return (
    <>
      {cards && (
        <Slider {...settings} className='slider'>
          {cards.map((card) => {
            return (
              <div className='card' key={card.IdBanner} id='cards'>
                <img
                  src={`${API_URL}${card.PhotoBanner}`}
                  alt='banner'
                  className='banner'
                />
              </div>
            );
          })}
        </Slider>
      )}

      {staffInfo && (
        <div id='staff'>
          <Slider {...settingsForStaff} className='slider slider-staff'>
            {staffInfo.map((teacher) => (
              <CardPersonal teacher={teacher} prefixClass='main-personal' />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default SliderBlock;
