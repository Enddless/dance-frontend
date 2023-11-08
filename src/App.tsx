import css from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFPage from "./pages/NotFoundPage/NFPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { isDark } = useTheme();
  return (
    <div className={css.app}>
      <Header />
      <div className={isDark ? `${css.blurContent}` : ""}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/dashboard"} element={<DashboardPage />} />
            <Route path={"/reviews"} element={<ReviewsPage />} />
            <Route path={"/*"} element={<NFPage />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </div>
  );
};

export default App;
