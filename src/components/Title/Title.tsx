import css from "./Title.module.scss";
import sprite from "../../assets/sprite.svg";

interface ITitleSectionProps {
  title: string;
  cls?: string;
}

const TitleSection = ({ title, cls }: ITitleSectionProps) => {
  return (
    <div className={css.container}>
      <div className={` ${css.line} ${css.lineLeft}`}></div>
      <h1 className={css.title}>{title}</h1>
      <div className={` ${css.line} ${css.lineRight}`}></div>
    </div>
  );
};

export default TitleSection;
