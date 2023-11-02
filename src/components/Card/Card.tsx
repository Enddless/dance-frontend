import css from "./Card.module.scss";
import sprite from "../../assets/sprite.svg";
import classNames from "classnames";
import { IPricesInfo, IReviewsInfo } from "../../interfaces/interfaces";

interface ICardProps {
  item?: IPricesInfo;
  review?: IReviewsInfo;
  cls?:string;
}

const Card = ({ item, review, cls }: ICardProps) => {
  const check = cls ==="reviewsCard" //для других классов, чтобы подставлять сразу в перечень классов
  const classNamesList = classNames(css.card, {
    [css.reviewsCard]:check,
  });
  return (
    <div className={classNamesList}>
      {item && (
        <>
          <p>{item.title}</p>
          {item.data.map((text) => {
            return (
              <div key={text}>
                <svg width="24" height="24">
                  <use xlinkHref={`${sprite}#check`}></use>
                </svg>
                <p>{text}</p>
              </div>
            );
          })}
          <p>{item.price}</p>
        </>
      )}
      {review && (
        <>
          <p>{review.data.user}</p>
          {Array.from({ length: review?.data.stars }, (_, index) => index).map(
            (star) => {
              return (
                <div key={star}>
                  <img></img>
                  <span>{star}</span>
                </div>
              );
            }
          )}
          <p>{review.data.date}</p>
          <p>{review.data.description}</p>
        </>
      )}
    </div>
  );
};

export default Card;
