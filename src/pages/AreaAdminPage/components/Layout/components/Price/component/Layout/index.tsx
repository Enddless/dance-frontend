import ControlButton from "../../../../../../../../components/controls-button";
import { pricesInfo } from "../../../../../../../../mocks/mocks";
import css from "./style.module.scss";
import sprite from "../../../../../../../../assets/sprite.svg";
interface IActiveButtonProps {
  isActiveButton: string;
}

function LayoutPrice({ isActiveButton }: IActiveButtonProps) {
  const findCardInfo = pricesInfo.find((item) => item.title === isActiveButton);
  if (!findCardInfo) return false;
  return (
    <div className={css.wrapper}>
      <div className={css.controlGroup}>
        <ControlButton id="edit" />
        <ControlButton id="delete" />
      </div>
      <p className={css.title}>{findCardInfo.title}</p>
      {findCardInfo.data.map((text) => {
        return (
          <>
          <label key={text}>
            <svg width="35" height="35" viewBox="0 0 35 35">
              <use xlinkHref={`${sprite}#check`}></use>
            </svg>
            <input type="text" className={css.textCheck} value={text} />
          </label>
           </>
        );
      })}
      <p className={css.title}>{findCardInfo.price} P</p>
    </div>
  );
}

export default LayoutPrice;
