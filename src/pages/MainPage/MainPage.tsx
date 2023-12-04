import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Prices from "./components/Prices/Prices";
import Reviews from "./components/Reviews/Reviews";
import SliderBlock from "../../components/Slider/SliderBlock";
import { bannerUrl } from "../../mocks/mocks";
import StaffPage from "./components/BlockStaff";

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
