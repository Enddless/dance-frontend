
interface ITitleSectionProps {
  title: string;
  className?: string,
}

const TitleSection = ({ title, className }: ITitleSectionProps) => {
  return (
    <div className={className}>{title}</div>
  );
};

export default TitleSection;
