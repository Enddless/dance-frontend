import { notificationData } from "../../../../../mocks/mocks";
import css from "../../styles.module.scss";

const NotificationItem = () => {
  return (
    <>
      {notificationData.map((item) => {
        const day =
          item.date.getDate() +
          "." +
          item.date.getMonth() +
          "." +
          item.date.getFullYear();
        const time = item.date.getHours() + ":" + item.date.getMinutes();
        return (
          <div className={css.notificationContainer} key={item.id}>
            <div className={css.notificationItem}>
              <label htmlFor={`notification${item.id}`}>
                <input
                  type="checkbox"
                  name={`notification${item.id}`}
                  id={`notification${item.id}`}
                  className={css.checkbox}
                />
                <span className={css.fake}></span>
                <span className={css.text}>{item.text}</span>
              </label>
            </div>
            <div className={css.time}>
              {day} {time}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NotificationItem;
