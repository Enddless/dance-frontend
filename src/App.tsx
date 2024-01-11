import css from "./App.module.scss";
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
import AreaAdminPage from "./pages/AreaAdminPage";
import { RedirectPersonalArea } from "./components/redirect-personal-area";
import { menuAreaAdministrator, menuAreaPersonal } from "./const/const";
import React from "react";

const App = () => {
  const { isDark } = useTheme();

  return (
    <BrowserRouter>
      <div className={css.app}>
        <div className={isDark ? `${css.blurContent}` : ""}></div>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />} />
          <Route path={AppRoute.Dashboard} element={<DashboardPage />} />
          <Route path={AppRoute.Reviews} element={<ReviewsPage />} />
          <Route path={AppRoute.NotFound} element={<NFPage />} />
          <Route path={AppRoute.Registration} element={<RegistrationForm />} />
          <Route path={AppRoute.Recovery} element={<RecoveryForm />} />

          <Route
            path={AppRoute.PersonalArea}
            element={
              <RedirectPersonalArea>
                <AreaPersonalPage />
              </RedirectPersonalArea>
            }
          >
            {menuAreaPersonal.map((name) => (
              <Route
                key={name.title}
                path={name.path}
                element={<AreaPersonalPage />}
              ></Route>
            ))}
          </Route>
          <Route
            path={AppRoute.AdministratorArea}
            element={
              <React.Fragment>
                <AreaAdminPage />
              </React.Fragment>
            }
          >
            {menuAreaAdministrator.map((name) => (
              <Route
                key={name.title}
                path={name.path}
                element={
                  <React.Fragment>
                    <AreaAdminPage />
                  </React.Fragment>
                }
              ></Route>
            ))}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
