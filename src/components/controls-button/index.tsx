import sprite from "../../assets/sprite.svg";
import css from "./styles.module.scss";

type TControlsProps = {
  isHallsSettings?: boolean;
};
function ControlsButton({ isHallsSettings }: TControlsProps) {
  return (
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
        
        {isHallsSettings && (
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use xlinkHref={`${sprite}#closeControls`}></use>
          </svg>
        )}
      </div>
    </div>
  );
}

export default ControlsButton;
