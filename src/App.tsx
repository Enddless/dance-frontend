import css from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFPage from "./pages/NotFoundPage/NFPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import useTheme from "./hooks/useTheme";
import { AppRoute } from "./const/route";
import RegistrationForm from "./components/Forms/RegistrationForm";
import RecoveryForm from "./components/Forms/RecoveryForm";
import AreaPersonalPage from "./pages/AreaPersonalPage";

const App = () => {
  const { isDark } = useTheme();
  return (
    <BrowserRouter>
      <div className={css.app}>
        <Header />
        <div className={isDark ? `${css.blurContent}` : ""}>
          <Routes>
            <Route path={AppRoute.Root} element={<MainPage />} />
            <Route path={AppRoute.Dashboard} element={<DashboardPage />} />
            <Route path={AppRoute.Reviews} element={<ReviewsPage />} />
            <Route path={AppRoute.NotFound} element={<NFPage />} />
            <Route
              path={AppRoute.Registration}
              element={<RegistrationForm />}
            />
            <Route path={AppRoute.Recovery} element={<RecoveryForm />} />
            <Route path={AppRoute.PersonalArea} element={<AreaPersonalPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
