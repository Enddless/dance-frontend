import About from "../../components/BlockAbout/About";
import Contacts from "../../components/BlockContacts/Contacts";
import css from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={css.main}>
      <About />
      <Contacts />
    </div>
  );
};

export default MainPage;
