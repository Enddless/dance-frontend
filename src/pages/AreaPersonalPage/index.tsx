import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Layout from "./Layout";
import css from "./styles.module.scss";
import { useAppSelector } from "../../services/type-service";
import { AuthorizationStatus, menuArea } from "../../const/const";
import { AppRoute } from "../../const/route";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AreaPersonalPage = () => {
  const navigate = useNavigate();

  const [isActiveButton, setIsActiveButton] = useState("Основные настройки");
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
        {menuArea.map((button) => {
          return (
            <NavLink to={`${AppRoute.PersonalArea}/${button}`}>
              <Button
                key={button}
                text={button}
                cls="menuAreaButton"
                activeClass={`${isActiveButton === button ? "active" : ""}`}
                openModalForm={() => openModalForm(button)}
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
