import AboutSettings from "../About";
import ContactsSettings from "../Contacts";
import ControlUsers from "../Control-users";
import DashboardSettings from "../Dashboard";
import Halls from "../Halls";
import LegalInformation from "../Information";
import News from "../News";
import Personal from "../Personal";
import PriceSettings from "../Price";
import ReviewSettings from "../Review";
import SettingsAll from "../SettingsAll";
import css from "./styles.module.scss";
interface IActiveButtonProps {
  isActiveButton: string;
}

function Layout({ isActiveButton }: IActiveButtonProps) {
  return (
    <div className={css.layout}>
      {isActiveButton === "О студии" && <AboutSettings />}
      {isActiveButton === "Новости и акции" && <News />}
      {isActiveButton === "Наши залы" && <Halls />}
      {isActiveButton === "Персонал" && <Personal />}
      {isActiveButton === "Юридическая информация" && <LegalInformation />}
      {isActiveButton === "Услуги и цены" && <PriceSettings/>}
      {isActiveButton === "Расписание" && <DashboardSettings />}
      {isActiveButton === "Отзывы" && <ReviewSettings />}
      {isActiveButton === "Контакты" && <ContactsSettings />}
      {isActiveButton === "Управление пользователями" && <ControlUsers />}
      {isActiveButton === "Настройки" && <SettingsAll />}
    </div>
  );
}

export default Layout;
