import TitleSection from "../../../../components/Title/Title";
import css from "./About.module.scss";
import { aboutStudio, hallsData } from "../../../../mocks/mocks";
import CardHalls from "../../../../components/CardHalls";

const About = () => {
  return (
    <section className={css.about}>
      <TitleSection title="О студии" />
      <div className={css.text}>
        {aboutStudio.description.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className={css.galerry}>
        {hallsData.map((item) => {
          return <CardHalls hall={item} key={item.name} />;
        })}
      </div>
    </section>
  );
};

export default About;
