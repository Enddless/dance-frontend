import MainPage from '../../pages/main-page';
import { Routes, Route, useLocation } from 'react-router-dom';
import NFPage from '../../pages/not-found-page';
import ReviewsPage from '../../pages/reviews-page';
import { AppRoute } from '../../const/route';
import AreaPersonalPage from '../../pages/user-page';
import { RedirectPersonalArea } from '../redirect-personal-area';
import {
  AUTH_TOKEN_NAME,
  menuAreaAdministrator,
  menuAreaPersonal
} from '../../const/const';
import { Modal } from '../modal-form';
import LoginForm from '../forms/LoginForm';
import { useEffect, useState } from 'react';
import Spinner from '../spinner';
import { useAppDispatch } from '../../services/type-service';
import { authSlice } from '../../store/slices/auth';
import { CalendarWithEventsPage } from '../../pages/calendar-page';
import AdminPage from '../../pages/admin-page';
import { PageLayout } from '../../slices/page-layout';

const App = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const previousLocation = location.state?.previousLocation;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Симулируем загрузку данных
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);
  const token = localStorage.getItem(`${AUTH_TOKEN_NAME}`);
  // const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      dispatch(authSlice.actions.refreshUser());
    }
  }, [token]);

  return (
    <>
      {loading ? (
        <div className='spinnerContainer'>
          <Spinner />
        </div>
      ) : (
        <div className='app'>
          <Routes location={previousLocation || location}>
            <Route
              path={AppRoute.Root}
              element={
                <PageLayout>
                  <MainPage />{' '}
                </PageLayout>
              }
            />
            <Route
              path={AppRoute.Dashboard}
              element={
                <PageLayout>
                  <CalendarWithEventsPage />
                </PageLayout>
              }
            />
            <Route
              path={AppRoute.Reviews}
              element={
                <PageLayout>
                  <ReviewsPage />
                </PageLayout>
              }
            />

            <Route path={`${AppRoute.Modal}${AppRoute.Login}`} element={<LoginForm />} />

            <Route
              path={AppRoute.NotFound}
              element={
                <PageLayout>
                  <NFPage />
                </PageLayout>
              }
            />

            <Route
              path={AppRoute.PersonalArea}
              element={
                <RedirectPersonalArea>
                  <PageLayout>
                    {' '}
                    <AreaPersonalPage />
                  </PageLayout>
                </RedirectPersonalArea>
              }>
              {menuAreaPersonal.map((name) => (
                <Route
                  key={name.title}
                  path={name.path}
                  element={<AreaPersonalPage />}></Route>
              ))}
            </Route>

            <Route
              path={AppRoute.AdministratorArea}
              element={
                <RedirectPersonalArea>
                  <AdminPage />
                </RedirectPersonalArea>
              }>
              {menuAreaAdministrator.map((name) => (
                <Route key={name.title} path={name.path} element={<AdminPage />}></Route>
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
      )}
    </>
  );
};

export default App;
