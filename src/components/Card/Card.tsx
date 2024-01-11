import css from "./Card.module.scss";
import sprite from "../../assets/sprite.svg";
import classNames from "classnames";
import { IPricesInfo, IReviewsInfo } from "../../interfaces/interfaces";

interface ICardProps {
  price?: IPricesInfo;
  review?: IReviewsInfo;
  cls?: string;
  id?: string;
}

const Card = ({ price, review, cls, id }: ICardProps) => {
  const check = cls === "reviewsCard"; //для других классов, чтобы подставлять сразу в перечень классов
  const page = id === "forPage";
  const classNamesList = classNames(css.card, {
    [css.reviewsCard]: check,
    [css.reviewsPageCard]: page,
  });
  return (
    <div className={classNamesList}>
      {price && (
        <>
          <p className={css.title}>{price.title}</p>
          {price.data.map((text) => {
            return (
              <div key={text} className={css.checkbox}>
                <div>
                  <svg width="35" height="35" viewBox="0 0 35 35">
                    <use xlinkHref={`${sprite}#check`}></use>
                  </svg>
                </div>
                <p className={css.textCheck}>{text}</p>
              </div>
            );
          })}
          <p className={css.title}>{price.price} P</p>
        </>
      )}
      {review && (
        <>
          <div className={css.userInfo}>
            <p className={css.title}>{review.data.user}</p>
            <div className={css.star}>
              {Array.from(
                { length: review?.data.stars },
                (_, index) => index
              ).map((star) => {
                return (
                  <div key={star}>
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <use xlinkHref={`${sprite}#star`}></use>
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>

          <p className={css.date}>{review.data.date}</p>
          <p>{review.data.description}</p>
        </>
      )}
    </div>
  );
};

export default Card;
