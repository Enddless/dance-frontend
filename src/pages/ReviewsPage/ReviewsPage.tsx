import css from "./ReviewsPage.module.scss";

import Reviews from "../../components/BlockReviews/Reviews";
import Button from "../../components/Button/Button";

const ReviewsPage = () => {
  return (
    <>
      <Reviews />
      <Button text="Показать еще" />
    </>
  );
};

export default ReviewsPage;
