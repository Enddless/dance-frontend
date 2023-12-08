import css from "./ReviewsPage.module.scss";

import Reviews from "../MainPage/components/Reviews/Reviews";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ReviewsPage = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <Reviews id="forPage" />
      <Footer />
    </div>
  );
};

export default ReviewsPage;
