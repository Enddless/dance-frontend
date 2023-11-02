import { pricesInfo } from "../../mocks/mocks";
import CardPrice from "../Card/Card";
import TitleSection from "../Title/Title";
import css from "./Prices.module.scss";

const Prices = () => {
  return (
    <section className={css.services}>
      <TitleSection title="Услуги и цены"/>
      <div className={css.container}>
        {pricesInfo.map((item) => {
          return <CardPrice key={item.id} item={item}/>;
        })}
      </div>
      <p>
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
