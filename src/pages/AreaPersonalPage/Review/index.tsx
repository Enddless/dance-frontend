import EmptyTemplate from "../EmptyTemplate";
import css from "./styles.module.scss";

const WriteReview = () => {
  const totalVisit = 0;
  return (
    <div className={css.wrapper}>
      {totalVisit > 0 ? (
        "    WriteReviewPage"
      ) : (
        <EmptyTemplate>
          <p>
            Для того чтобы оставить отзыв Вам необходимо
            посетить хотя бы одно занятие.
          </p>
        </EmptyTemplate>
      )}
    </div>
  );
};

export default WriteReview;
