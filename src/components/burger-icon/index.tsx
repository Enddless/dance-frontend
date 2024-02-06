import sprite from "../../assets/sprite.svg";

type TburgerProps = {
  onClick?: () => void;
}
function BurgerIcon({onClick} : TburgerProps) {
  return (
    <svg width="30" height="18" viewBox="0 0 30 18" onClick={onClick}>
      <use xlinkHref={`${sprite}#menu`}></use>
    </svg>
  );
}

export default BurgerIcon;
