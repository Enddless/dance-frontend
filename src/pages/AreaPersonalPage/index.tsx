import { useEffect } from "react";
import Layout from "./Layout";
import css from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import {
  AuthorizationStatus,
  DEFAULT_BUTTON_AREA_PERSONAL,
} from "../../const/const";
import { AppRoute } from "../../const/route";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TabsPersonal from "./Tabs";
import { authSlice } from "../../store/slices/auth";

const AreaPersonalPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation().pathname.slice(1).split("/")[1];
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  const currentButton = useAppSelector((state) => state.auth.buttonActive);
  useEffect(() => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);

  useEffect(() => {
    dispatch(authSlice.actions.changeActiveButtonMenuPersonal(location));
  }, [location, dispatch]);

  // если определить адрес не удалось, направить на меню по дефолту
  useEffect(() => {
    if (!location) {
      navigate(`${DEFAULT_BUTTON_AREA_PERSONAL.path}`);
    }
  }, [navigate, location]);

  return (
    <>
      <Header />
      <div className={css.container}>
        <TabsPersonal />

        {currentButton && <Layout currentButton={currentButton} />}
      </div>
      <Footer />
    </>
  );
};

export default AreaPersonalPage;
