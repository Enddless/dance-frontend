import css from "./Reviews.module.scss";
import { Link } from "react-router-dom";
import TitleSection from "../../../../components/Title/Title";
import { reviewsInfo } from "../../../../mocks/mocks";
import CardReview from "../../../../components/CardReview";

const MainReviews = () => {
  return (
    <section className={css.reviews} id="reviewsBlock">
      <TitleSection title="Отзывы" />
      <div className={css.container}>
        {reviewsInfo.slice(0, 4).map((review) => {
          return <CardReview review={review} key={review.id} />;
        })}
      </div>

      <Link to="/reviews">
        <div className={css.blur}>
          <h6>Смотреть все отзывы</h6>
        </div>
      </Link>
    </section>
  );
};

export default MainReviews;
