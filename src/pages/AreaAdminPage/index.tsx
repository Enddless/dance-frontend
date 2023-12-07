import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import css from "./styles.module.scss";
import Logo from "../../components/Logo/Logo";
import {
  AuthorizationStatus,
  DEFAULT_BUTTON_AREA_ADMIN,
  menuAreaAdministrator,
} from "../../const/const";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../const/route";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../services/type-service";

const AreaAdminPage = () => {
  const navigate = useNavigate();
  const [isActiveButton, setIsActiveButton] = useState(
    DEFAULT_BUTTON_AREA_ADMIN.title
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

  const LINK_CLASS = `${css.menuItem}`;
  const ACTIVE_CLASS = `${LINK_CLASS} ${css.active}`;
  //добавить диспатч на изменение активного меню
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <div className={css.logoContainer}>
          <Logo />
        </div>
        <ul className={css.menu}>
          {menuAreaAdministrator.map((button) => {
            return (
              <li onClick={() => openModalForm(button.title)}>
                <NavLink
                  to={`${AppRoute.AdministratorArea}/${button.path}`}
                  key={button.id}
                  className={({ isActive }) =>
                    isActive ? ACTIVE_CLASS : LINK_CLASS
                  }
                >
                  {button.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>

      {isActiveButton && <Layout isActiveButton={isActiveButton} />}
    </div>
  );
};

export default AreaAdminPage;
