import NotificationItem from "./components/NotificationItem";
import SettingsNotifications from "./components/Settings";
import Subscribe from "./components/Subscribe";
import css from "./styles.module.scss";

const Notifications = () => {
  return (
    <div className={css.container}>
      <SettingsNotifications />
      <NotificationItem />
      <Subscribe />
    </div>
  );
};

export default Notifications;
