import css from "./styles.module.scss";
import EmptyTemplate from "../EmptyTemplate";

const OnlineRecovery = () => {
  const record = false;
  return (
    <div className={css.wrapper}>
      {record ? (
        "    OnlineRecoveryPage"
      ) : (
        <EmptyTemplate>
          <p>
            Для того чтобы записаться на занятие Вам необходимо приобрести
            абонемент.
          </p>
        </EmptyTemplate>
      )}
    </div>
  );
};

export default OnlineRecovery;
