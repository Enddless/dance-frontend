import History from "../History/index";
import Notifications from "../Notifications/index";
import ChangePassword from "../Password/index";
import OnlineRecovery from "../Recovery/index";
import WriteReview from "../Review/index";
import Settings from "../Settings";
import Tickets from "../Tickets/index";


interface IActiveButtonProps {
  isActiveButton: string;
}

function Layout({ isActiveButton }: IActiveButtonProps) {
  return (
    <>
      {isActiveButton === "Основные настройки" && <Settings />}
      {isActiveButton === "Мои абонементы" && <Tickets />}
      {isActiveButton === "Уведомления" && <Notifications />}
      {isActiveButton === "История посещений" && <History />}
      {isActiveButton === "Онлайн запись" && <OnlineRecovery />}
      {isActiveButton === "Смена пароля" && <ChangePassword />}
      {isActiveButton === "Написать отзыв" && <WriteReview />}
    </>
  );
}

export default Layout;
