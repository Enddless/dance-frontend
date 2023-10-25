
import { pricesInfo } from "../../mocks/mocks";
import TitleSection from "../Title/Title";
import css from "./Prices.module.scss";

const Prices = () => {
  return (
    <section className={css.services}>
      <TitleSection title="Цены и абонементы" />
      <div className={css.text}>
        {pricesInfo.map((item) => {
          return(
            <div className={css.card} key={item.id}>
              <p>{item.data.title}</p>
              <p>{item.data.price}</p>
              <p>{item.data.description}</p>
              <button className={css.more}></button>
            </div>
          )
        })}
      </div>
      <img src="" alt="" className={css.photo} />
    </section>
  );
};

export default Prices;
