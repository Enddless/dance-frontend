import About from "../../components/BlockAbout/About";
import Contacts from "../../components/BlockContacts/Contacts";
import Prices from "../../components/BlockPrices/Prices";
import Reviews from "../../components/BlockReviews/Reviews";
import Services from "../../components/BlockServices/Services";
import Lead from "../../components/Lead/Lead";
import css from "./MainPage.module.scss";


const cards = [
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4",
  "Slide 5",
  "Slide 6",
  "Slide 7",
  "Slide 8",
];


const MainPage = () => {
  return (
    <div className={css.main}>
      <Lead cards={cards} />
      <About />
      <Services />
      <Prices />
      <Reviews />
      <Contacts />
    </div>
  );
};

export default MainPage;
