
import { reviewsInfo } from "../../mocks/mocks";
import Button from "../Button/Button";
import TitleSection from "../Title/Title";
import css from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <section className={css.services}>
      <TitleSection title="Отзывы" />
      <div className={css.text}>
        {reviewsInfo.map((item) => {
          return(
            <div className={css.card} key={item.id}>
              <p>{item.data.user}</p>
              <p>{item.data.stars}</p>
              <p>{item.data.date}</p>
              <p>{item.data.description}</p>
            </div>
          )
        })}
      </div>
        <Button  text="Показать еще"/>
    </section>
  );
};

export default Reviews;
