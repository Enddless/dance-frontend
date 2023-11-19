import AboutSettings from "../About";
import ContactsSettings from "../Contacts";
import DashboardSettings from "../Dashboard";
import PriceSettings from "../Price";
import ReviewSettings from "../Review";
import css from "./styles.module.scss";
interface IActiveButtonProps {
  isActiveButton: string;
}

function Layout({ isActiveButton }: IActiveButtonProps) {
  return (
    <div className={css.layout}>
      {isActiveButton === "О студии" && <AboutSettings />}
      {isActiveButton === "Услуги и цены" && <PriceSettings/>}
      {isActiveButton === "Расписание" && <DashboardSettings />}
      {isActiveButton === "Отзывы" && <ReviewSettings />}
      {isActiveButton === "Контакты" && <ContactsSettings />}
    </div>
  );
}

export default Layout;
