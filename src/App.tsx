import css from "./App.module.scss";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route, useLocation } from "react-router-dom";
import NFPage from "./pages/NotFoundPage/NFPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { AppRoute } from "./const/route";
import AreaPersonalPage from "./pages/AreaPersonalPage";
import AreaAdminPage from "./pages/AreaAdminPage";
import { RedirectPersonalArea } from "./components/redirect-personal-area";
import { menuAreaAdministrator, menuAreaPersonal } from "./const/const";
import React from "react";
import { Modal } from "./components/Forms/components/Modal";

const App = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <div className={css.app}>
      <Routes location={previousLocation || location}>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Dashboard} element={<DashboardPage />} />
        <Route path={AppRoute.Reviews} element={<ReviewsPage />} />

        {/* <Route path={`${AppRoute.Modal}${AppRoute.Login}`} element={<LoginForm />} />
        <Route path={`${AppRoute.Modal}${AppRoute.Registration}`} element={<RegistrationForm />} />
        <Route path={AppRoute.Recovery} element={<RecoveryForm />} /> */}
        <Route path={AppRoute.NotFound} element={<NFPage />} />

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

        {/* <Route
          path={`${AppRoute.Modal}${AppRoute.Login}${AppRoute.Registration}`}
          element={<RegistrationForm />}
          element={<Modal />}
        /> */}
      </Routes>
      {previousLocation && (
        <Routes>
          <Route path={`${AppRoute.Modal}/:id`} element={<Modal />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
