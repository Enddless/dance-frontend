import css from "./style.module.scss";
import sprite from "../../assets/sprite.svg";
import { IReviewsInfo } from "../../interfaces/interfaces";
import ControlButton from "../controls-button";
import classNames from "classnames";

interface ICardProps {
  review: IReviewsInfo;
  id?: string;
}

const CardReview = ({ review, id }: ICardProps) => {
  const isAdminSettings = id === "adminSettings";

  const classNamesList = classNames(css.userInfo, {
    [css.starRedisign]: isAdminSettings,
  });
  return (
    <div className={css.card}>
      {review && (
        <>
          {isAdminSettings && (
            <div className={css.control}>
              <ControlButton id="delete" />
            </div>
          )}
          <div className={classNamesList}>
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

export default CardReview;
