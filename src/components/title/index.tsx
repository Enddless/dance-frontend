interface ITitleSectionProps {
  title: string;
  cls?: string;
}

const TitleSection = ({ title, cls }: ITitleSectionProps) => {
  return (
    <div className={`${cls} title grid grid--12`}>
      <div className='title__line title__line--left'></div>
      <h3 className='title__text'>{title}</h3>
      <div className='title__line title__line--right'></div>
    </div>
  );
};

export default TitleSection;
