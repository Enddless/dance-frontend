import About from "../../components/BlockAbout/About";
import Contacts from "../../components/BlockContacts/Contacts";
import Prices from "../../components/BlockPrices/Prices";
import Reviews from "../../components/BlockReviews/Reviews";

import SliderBlock from "../../components/Slider/SliderBlock";
// import css from "./MainPage.module.scss";
import { bannerUrl } from "../../mocks/mocks";
import StaffPage from "../../components/BlockStaff";

const MainPage = () => {
  return (
    <>
      <SliderBlock cards={bannerUrl} />

      <About />
      <StaffPage />
      <Prices />
      <Reviews />
      <Contacts />
    </>
  );
};

export default MainPage;
