import { reviewsInfo } from "../../mocks/mocks";
import Button from "../Button/Button";
import Card from "../Card/Card";
import TitleSection from "../Title/Title";
import css from "./Reviews.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface IPageIDProps {
  id: string;
}
const Reviews = ({ id }: IPageIDProps) => {
  const page = id === "forPage" 
 
  const classNamesList = classNames(css.container, {
    [css.containerReviewsPage]: page,
  });

  return (
    <section className={css.reviews} id="reviewsBlock">
      <TitleSection title="Отзывы" />
      <div className={classNamesList}>
        {reviewsInfo.slice(0, 4).map((review) => {
          return (
            <Card
              review={review}
              key={review.id}
              cls="reviewsCard"
              id="forPage"
            />
          );
        })}
        {page && <Button text="Показать еще" cls="btn-more" />}
      </div>
      {!page && (
        <Link to="/reviews">
          <div className={css.blur}>
            <h6>Смотреть все отзывы</h6>
          </div>
        </Link>
      )}
    </section>
  );
};

export default Reviews;
