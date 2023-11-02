import css from "./SliderBlock.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./sliderCustomSettings.scss";
import { IBannerUrl, IStaffInfo } from "../../interfaces/interfaces";

interface ISettings {
  dots?: boolean;
  arrow?: boolean;
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
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, //скорость воспроизведения слайдов
};
const settingsForStaff: ISettings = {
  // dots: true,
  // arrow: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 5000,
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
              <div className={css.card} key={card.id}>
                <img src={card.url} alt="banner" />
              </div>
            );
          })}
        </Slider>
      )}

      {staffInfo && (
        <Slider {...settingsForStaff} className={css.sliderStaff}>
          {staffInfo.map(({ name, img, description, id }) => (
            <div key={id} className={css.staffInfo}>
              <div className={css.avatar}>
                <img src={img} alt="staffPhoto" />
              </div>

              <div className={css.staffDescr}>
                <h4>{name}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default SliderBlock;
