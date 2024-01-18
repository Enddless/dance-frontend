import { pricesInfo } from "../../../../mocks/mocks";
import css from "./Prices.module.scss";
import TitleSection from "../../../../components/Title/Title";
import CardPrice from "../../../../components/CardPrice";
import classNames from "classnames";

const Prices = () => {
  const lengthMoreDefault = pricesInfo && pricesInfo?.length > 4;
  const classNameList = classNames(css.container, {
    [css.tile]: lengthMoreDefault,
  });

  return (
    <section className={css.services} id="pricesBlock">
      <TitleSection title="Услуги и цены" />
      <div className={classNameList}>
        {pricesInfo.map((price) => {
          return <CardPrice key={price.id} price={price} isMainPage={lengthMoreDefault} />;
        })}
      </div>
      <div className={css.text}>
        <p>
          Цены разные, в зависимости от числа занятий в абонементе, срока
          абонемента и города, в котором находится студия. Более подробно можно
          узнать на пробном занятии и подобрать оптимальный вариант для вас.
        </p>
        <p>
          Можем также сделать абонемент под Вас, или под корпоративные обучения.
          Подробнее Вы можете уточнить у администратора или по телефону +7 (495)
          788-77-50
        </p>
      </div>
    </section>
  );
};

export default Prices;
