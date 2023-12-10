import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Layout from "./Layout";
import css from "./styles.module.scss";
import { useAppSelector } from "../../services/type-service";
import {
  AuthorizationStatus,
  DEFAULT_BUTTON_AREA_PERSONAL,
  menuAreaPersonal,
} from "../../const/const";
import { AppRoute } from "../../const/route";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AreaPersonalPage = () => {
  const navigate = useNavigate();

  const [isActiveButton, setIsActiveButton] = useState(
    DEFAULT_BUTTON_AREA_PERSONAL.title
  );
  const openModalForm = (text: string) => {
    setIsActiveButton(text);
  };
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  useEffect(() => {
    if (authStatus !== AuthorizationStatus.Auth.toString()) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);

  return (
    <div className={css.container}>
      <div className={css.btnGroup}>
        {menuAreaPersonal.map((button) => {
          return (
            <NavLink
              to={`${AppRoute.PersonalArea}/${button.path}`}
              key={button.id}
            >
              <Button
                text={button.title}
                cls="menuAreaButton"
                activeClass={`${
                  isActiveButton === button.title ? "active" : ""
                }`}
                openModalForm={() => openModalForm(button.title)}
              />
            </NavLink>
          );
        })}
      </div>
      {isActiveButton && <Layout isActiveButton={isActiveButton} />}
    </div>
  );
};

export default AreaPersonalPage;
