import About from "../../components/BlockAbout/About";
import Contacts from "../../components/BlockContacts/Contacts";
import Prices from "../../components/BlockPrices/Prices";
import Reviews from "../../components/BlockReviews/Reviews";
import SliderBlock from "../../components/Slider/SliderBlock";
import { bannerUrl } from "../../mocks/mocks";
import StaffPage from "../../components/BlockStaff";

const MainPage = () => {
  return (
    <div>
      <SliderBlock cards={bannerUrl} />
      <About />
      <StaffPage />
      <Prices />
      <Reviews />
      <Contacts />
    </div>
  );
};

export default MainPage;
