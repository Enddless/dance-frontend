import { hallsData } from "../../../../../const/const";
import css from "./style.module.scss";
import sprite from "../../../../../assets/sprite.svg";
interface IActiveButtonProps {
  isActiveButton: string;
}

function LayoutHalls({ isActiveButton }: IActiveButtonProps) {
  const findCardInfo = hallsData.find((item) => item.name === isActiveButton);
  if (!findCardInfo) return false;
  return (
    <div className={css.container}>
      <div className={css.controls}>
        <div className={css.leftControls}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref={`${sprite}#pencilControls`}></use>
          </svg>
        </div>

        <div className={css.rightControls}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref={`${sprite}#deleteControls`}></use>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref={`${sprite}#closeControls`}></use>
          </svg>
        </div>
      </div>
      <div className={css.content}>
        <img src={findCardInfo.url} alt={findCardInfo.name} />
        <p>{findCardInfo.description}</p>
      </div>
    </div>
  );
}

export default LayoutHalls;
