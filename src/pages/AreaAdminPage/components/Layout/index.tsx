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
      {isActiveButton === "about" && <AboutSettings />}
      {isActiveButton === "news" && <News />}
      {isActiveButton === "halls" && <Halls />}
      {isActiveButton === "personal" && <Personal />}
      {isActiveButton === "information" && <LegalInformation />}
      {isActiveButton === "price" && <PriceSettings/>}
      {isActiveButton === "dashboard" && <DashboardSettings />}
      {isActiveButton === "reviews" && <ReviewSettings />}
      {isActiveButton === "contacts" && <ContactsSettings />}
      {isActiveButton === "control-users" && <ControlUsers />}
      {isActiveButton === "settings" && <SettingsAll />}
    </div>
  );
}

export default Layout;
