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
      {isActiveButton === "Абонементы" && <Tickets />}
      {isActiveButton === "Уведомления" && <Notifications />}
      {isActiveButton === "Записи" && <OnlineRecovery />}
      {isActiveButton === "Смена пароля" && <ChangePassword />}
      {isActiveButton === "Написать отзыв" && <WriteReview />}
    </>
  );
}

export default Layout;
