import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Prices from "./components/Prices/Prices";
import SliderBlock from "../../components/Slider/SliderBlock";
import StaffPage from "./components/BlockStaff";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainReviews from "./components/Reviews/Reviews";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import { mainPageData } from "../../services/thunk/mainPage";
import { useEffect } from "react";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const main = useAppSelector((state) => state.main.mainPage);

  const bannerUrl = main?.Banners;
  useEffect(() => {
    dispatch(mainPageData());
  }, []);
  return (
    <div>
      <Header />
      <SliderBlock cards={bannerUrl} />
      <About />
      <StaffPage />
      <Prices />
      <MainReviews />
      <Contacts />
      <Footer />
    </div>
  );
};

export default MainPage;
