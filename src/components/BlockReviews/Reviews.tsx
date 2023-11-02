import { reviewsInfo } from "../../mocks/mocks";
import Card from "../Card/Card";
import TitleSection from "../Title/Title";
import css from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <section className={css.reviews}>
      <TitleSection title="Отзывы" />
      <div className={css.container}>
        {reviewsInfo.slice(0,4).map((review) => {
          return(
            <Card review={review} key={review.id} cls="reviewsCard"/>
          )
        })}
      </div>
    </section>
  );
};

export default Reviews;
