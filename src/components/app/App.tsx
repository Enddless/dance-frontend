import css from "./App.module.scss";
import MainPage from "../../pages/MainPage/MainPage";
import { Routes, Route, useLocation } from "react-router-dom";
import NFPage from "../../pages/NotFoundPage/NFPage";
import ReviewsPage from "../../pages/ReviewsPage/ReviewsPage";
import DashboardPage from "../../pages/DashboardPage/DashboardPage";
import { AppRoute } from "../../const/route";
import AreaPersonalPage from "../../pages/AreaPersonalPage";
import AreaAdminPage from "../../pages/AreaAdminPage";
import { RedirectPersonalArea } from "../redirect-personal-area";
import { menuAreaAdministrator, menuAreaPersonal } from "../../const/const";
import { Modal } from "../modal-form/Modal";
import LoginForm from "../Forms/LoginForm";

const App = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <div className={css.app}>
      <Routes location={previousLocation || location}>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Dashboard} element={<DashboardPage />} />
        <Route path={AppRoute.Reviews} element={<ReviewsPage />} />

        <Route
          path={`${AppRoute.Modal}${AppRoute.Login}`}
          element={<LoginForm />}
        />

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
            <RedirectPersonalArea>
              <AreaAdminPage />
            </RedirectPersonalArea>
          }
        >
          {menuAreaAdministrator.map((name) => (
            <Route
              key={name.title}
              path={name.path}
              element={<AreaAdminPage />}
            ></Route>
          ))}
        </Route>
      </Routes>
      {previousLocation && (
        <Routes>
          <Route path={`${AppRoute.Modal}/:id`} element={<Modal />}>
            <Route path={` ${AppRoute.Login}`} element={<LoginForm />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default App;
