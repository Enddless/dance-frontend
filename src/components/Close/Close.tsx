import css from "./Close.module.scss";
import sprite from "../../assets/sprite.svg";

type ICloseProps = {
    openModalForm? : () => void
}

const Close = ({openModalForm} : ICloseProps) => {

  return (
    <div className={css.close} onClick={openModalForm}>
      <svg width="14" height="14" viewBox="0 0 14 14">
        <use xlinkHref={`${sprite}#close`}></use>
      </svg>
    </div>
  );
};
export default Close;
