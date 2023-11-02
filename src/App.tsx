import css from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFPage from "./pages/NotFoundPage/NFPage";
import Prices from "./components/BlockPrices/Prices";
import Contacts from "./components/BlockContacts/Contacts";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";


const App = () => {
  return (
    <div className={css.app}>
      <Header />
      <BrowserRouter>
        <Routes>
          
          <Route path={"/"}  element={<MainPage />} />
           <Route path={"/prices"} element={<Prices />}  /> {/*скорректировать переход, т.к. это не отдельная страница */}
          <Route path={"/dashboard"} element={<DashboardPage />}  />
          <Route path={"/reviews"} element={<ReviewsPage/>} />
          <Route path={"/contacts"} element={<Contacts />}  /> {/*скорректировать переход, т.к. это не отдельная страница */}
          <Route path={"/*"} element={<NFPage />} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
