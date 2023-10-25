import { servicesInfo } from "../../mocks/mocks";
import TitleSection from "../Title/Title";
import css from "./Services.module.scss";

const Services = () => {
  return (
    <section className={css.services}>
      <TitleSection title="Услуги" />
      <div className={css.text}>
        {servicesInfo.map((service) => {
          return(
            <div className={css.card} key={service.id}>
              <p>{service.data.title}</p>
              <p>{service.data.description}</p>
            </div>
          )
        })}
      </div>

    </section>
  );
};

export default Services;
