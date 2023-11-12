import css from "./SocialLinks.module.scss"
import sprite from "../../assets/sprite.svg"

const SocialLinks = () => {
  return (
    <div className={css.social}>
      <svg width="40" height="40" viewBox="0 0 40 40">
        <use xlinkHref={`${sprite}#ok`}></use>
      </svg>
      <svg width="40" height="40" viewBox="0 0 40 40">
        <use xlinkHref={`${sprite}#vk`}></use>
      </svg>
      <svg width="40" height="40" viewBox="0 0 40 40">
        <use xlinkHref={`${sprite}#telegram`}></use>
      </svg>
    </div>
  );
};

export default SocialLinks;
