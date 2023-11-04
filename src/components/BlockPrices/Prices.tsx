import { pricesInfo } from "../../mocks/mocks";
import Card from "../Card/Card";
import TitleSection from "../Title/Title";
import css from "./Prices.module.scss";

const Prices = () => {
  return (
    <section className={css.services} id="pricesBlock">
      <TitleSection title="Услуги и цены"/>
      <div className={css.container}>
        {pricesInfo.map((price) => {
          return <Card key={price.id} price={price}/>;
        })}
      </div>
      <p className={css.text}>
        Повседневная практика показывает, что глубокий уровень погружения в
        значительной степени обусловливает важность приоретизации разума над
        эмоциями. Идейные соображения высшего порядка, а также перспективное
        планирование говорит о возможностях форм воздействия. Также в клубе есть
        возможность аренды зала и дополнительные услуги. Подробнее Вы можете
        уточнить у администратора или по телефону +7 (495) 788-77-50
      </p>
    </section>
  );
};

export default Prices;
