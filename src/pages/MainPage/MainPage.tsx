import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Prices from "./components/Prices/Prices";
import Reviews from "./components/Reviews/Reviews";
import SliderBlock from "../../components/Slider/SliderBlock";
import { bannerUrl } from "../../mocks/mocks";
import StaffPage from "./components/BlockStaff";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <SliderBlock cards={bannerUrl} />
      <About />
      <StaffPage />
      <Prices />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
};

export default MainPage;
