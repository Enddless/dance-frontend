import css from "./style.module.scss";
import sprite from "../../assets/sprite.svg";
import { IPricesInfo } from "../../interfaces/interfaces";

interface ICardProps {
  price: IPricesInfo;
}

const CardPrice = ({ price }: ICardProps) => {
  return (
    <div className={css.card}>
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
    </div>
  );
};

export default CardPrice;
