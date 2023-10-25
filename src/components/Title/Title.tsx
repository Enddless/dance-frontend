import css from "./Title.module.scss"

interface ITitleSectionProps {
  title: string;
  className?: string,
}

const TitleSection = ({ title, className }: ITitleSectionProps) => {
  return (
    <div className={`${css.title} ${className}`}>{title}</div>
  );
};

export default TitleSection;
