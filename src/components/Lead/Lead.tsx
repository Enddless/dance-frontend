import css from "./Lead.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, CardContent, Typography } from "@mui/material";

import "./sliderCustomSettings.scss";

interface ISettings {
  dots?: boolean;
  arrow?: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}
const settings: ISettings = {
  dots: true,
  arrow: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const cards = [
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4",
  "Slide 5",
  "Slide 6",
  "Slide 7",
  "Slide 8",
];

const Lead = () => {
  return (
    <Slider {...settings} className={css.slider}>
      {cards.map((card) => {
        return (
          <Card
            key={card}
            sx={{ minWidth: 275, backgroundColor: "#e4e3e3", height: "300px" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {card}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Slider>
  );
};

export default Lead;
