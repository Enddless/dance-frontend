import css from "./Title.module.scss";
import sprite from "../../assets/sprite.svg"


interface ITitleSectionProps {
  title: string;
  cls?: string;
}

const TitleSection = ({ title, cls }: ITitleSectionProps) => {
  return (
    <div className={css.container}>
      <svg width="741" height="2" className={` ${css.line} ${css.lineLeft}`}>
        <use xlinkHref={`${sprite}#line`}></use>
      </svg>
      <h1 className={css.title}>{title}</h1>
      <svg width="741" height="2" className={` ${css.line} ${css.lineLeft}`}>
        <use xlinkHref={`${sprite}#line`}></use>
      </svg>
    </div>
  );
};

export default TitleSection;
