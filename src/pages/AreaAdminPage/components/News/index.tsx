import { bannerUrl } from "../../../../mocks/mocks";
import css from "./styles.module.scss";

const News = () => {
  return (
    <div className={css.container}>
      {bannerUrl.map((card) => {
        return (
          <div className={css.card} key={card.id} id="cards">
            <img src={card.url} alt="banner" />
          </div>
        );
      })}
    </div>
  );
};

export default News;
