import css from "./SliderBlock.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./sliderCustomSettings.scss";
import { IBannerUrl, IStaffInfo } from "../../interfaces/interfaces";

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
  autoplaySpeed: 4000, //скорость воспроизведения слайдов
};
const settingsForStaff: ISettings = {
  dots: true,
  // arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

type ICardsProps = {
  cards?: IBannerUrl[];
  staffInfo?: IStaffInfo[];
};

const SliderBlock = ({ cards, staffInfo }: ICardsProps) => {
  return (
    <>
      {cards && (
        <Slider {...settings} className={css.slider}>
          {cards.map((card) => {
            return (
              <div className={css.card} key={card.id} id="cards">
                <img src={card.url} alt="banner" />
              </div>
            );
          })}
        </Slider>
      )}

      {staffInfo && (
        <div id="staff">
          <Slider {...settingsForStaff} className={css.sliderStaff}>
            {staffInfo.map(({ name, img, description, id }) => (
              <div key={id} className={css.staffInfo}>
                <div className={css.avatar}>
                  <img src={img} alt="staffPhoto" />
                </div>

                <div className={css.staffDescr}>
                  <h6>{name}</h6>
                  <p>{description}</p>
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
