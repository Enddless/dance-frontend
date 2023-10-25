import css from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFPage from "./pages/NotFoundPage/NFPage";
import StaffPage from "./pages/StaffPage";
import Services from "./components/BlockServices/Services";
import Prices from "./components/BlockPrices/Prices";

const App = () => {
  return (
    <div className={css.app}>
      <Header />
      <BrowserRouter>
        <Routes>
          
          <Route path={"/"}  element={<MainPage />} />
          <Route path={"/service"} element={<Services />} />
          <Route path={"/price"} element={<Prices />}  />
          <Route path={"/dashboard"} element={""}  />
          <Route path={"/personal"} element={<StaffPage />} />
          <Route path={"/contacts"} element={""}  />

          <Route path={"/*"} element={<NFPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
