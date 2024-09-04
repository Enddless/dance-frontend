import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { API_URL } from '../../services/api';
import { PhotoContainer } from '../photo-container';
import { BannersData, TeacherData } from '../../interfaces/interfaces';

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
const settingsForStaff: ISettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000
};

type ICardsProps = {
  cards?: BannersData[];
  staffInfo?: TeacherData[];
};

const SliderBlock = ({ cards, staffInfo }: ICardsProps) => {
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
          <Slider {...settingsForStaff} className='sliderStaff'>
            {staffInfo.map((teacher) => (
              <div key={teacher.idTeachers} className='staffInfo'>
                {/* <div className={css.photoContainer}>
                  <div className={css.photoItem}>
                    <div className={css.photoBody}>
                      <img
                        src={`${API_URL}${teacher.photoTeachers}`}
                        alt="staffPhoto"
                        className={css.staffPhoto}
                      />
                    </div>
                  </div>
                </div> */}
                <PhotoContainer
                  alt='staffPhoto'
                  className='main-personal__photo-container'
                  url={`${teacher.photoTeachers}`}
                />

                <div className='staffDescr'>
                  <h5>{teacher.teachersName}</h5>
                  <p>{teacher.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default SliderBlock;
