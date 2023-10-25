import css from "./Lead.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./sliderCustomSettings.scss";

interface ISettings {
  dots?: boolean;
  arrow?: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: true;
  autoplaySpeed: number;
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

type ICardsProps = {
  cards: string[]
}

const Lead = ({cards}:ICardsProps) => {
  return (
    <Slider {...settings} className={css.slider}>
      {cards.map((card) => {
        return (
          <div className={css.card} key={card}>
            {card}
          </div>
        );
      })}
    </Slider>
  );
};

export default Lead;
