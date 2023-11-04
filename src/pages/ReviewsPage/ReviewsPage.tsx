import css from "./ReviewsPage.module.scss";

import Reviews from "../../components/BlockReviews/Reviews";

const ReviewsPage = () => {
  return (
    <div className={css.wrapper}>
      <Reviews id="forPage" />
    </div>
  );
};

export default ReviewsPage;
