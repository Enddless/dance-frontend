import TitleSection from "../../../../components/Title/Title";
import css from "./About.module.scss";
// import { aboutStudio, hallsData } from "../../../../mocks/mocks";
import CardHalls from "../../../../components/CardHalls";
import { useAppSelector } from "../../../../services/type-service";
import classNames from "classnames";

const About = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const description = main?.Atelie.description;
  const hallsData = main?.Halls;

  const lengthMoreDefault = hallsData && hallsData?.length > 3;
  const classNameList = classNames(css.galerry, {
    [css.tile]: lengthMoreDefault,
  });
  return (
    <section className={css.about}>
      <TitleSection title="О студии" />
      <div className={css.text}>
        <p>{description}</p>
      </div>
      <div className={classNameList}>
        {hallsData &&
          hallsData.map((item) => {
            return <CardHalls hall={item} key={item.IdHall} isMainPage={lengthMoreDefault} />;
          })}
      </div>
    </section>
  );
};

export default About;
