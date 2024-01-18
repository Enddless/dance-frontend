import css from "./style.module.scss";
import sprite from "../../assets/sprite.svg";
import { IPricesInfo } from "../../interfaces/interfaces";
import classNames from "classnames";

interface ICardProps {
  price: IPricesInfo;
  cls?: string;
  isMainPage?: boolean;
}

const CardPrice = ({ price, cls, isMainPage }: ICardProps) => {
  const isNoneShadow = cls === "noneShadow";
  const classNameList = classNames(css.card, {
    [css.noneShadow]: isNoneShadow,
    [css.redisignBlock]: isMainPage,
  });
  const checkboxGroup = classNames({
    [css.redisignCheckboxGroup]: isMainPage,
  });
  return (
    <div className={classNameList}>
      {price && (
        <>
          <p className={css.title}>{price.title}</p>
          <div className={checkboxGroup}>
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
          </div>
          <p className={css.title}>{price.price} P</p>
        </>
      )}
    </div>
  );
};

export default CardPrice;
