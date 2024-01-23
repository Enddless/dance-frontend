import css from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { pagesHeader } from "../../mocks/mocks";
// import LoginForm from "../Forms/LoginForm";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AreaForm from "../drop-down-menu/AreaForm";
import { useAppSelector } from "../../services/type-service";
import sprite from "../../assets/sprite.svg";
import { AppRoute } from "../../const/route";


const Header = () => {
  const location = useLocation();
  //  открытие модалки регистрации или входа
  const [isOpenModal, setIsModal] = useState(false);
  const openModalForm = () => {
    
    setIsModal(!isOpenModal);
    // setIsDark(!isDark);
  };

  //проверка авторизации пользователя
  const authorizationStatus = useAppSelector((state) => state.auth.authStatus);
  const user = useAppSelector((state) => state.auth.userData);

  const [userData, setUserData] = useState(user);
  useEffect(() => {
    setUserData(user);
  }, [user]);

  const userRole = useAppSelector((state) => state.auth.userRole)?.role;
  return (
    <div className={css.header}>
      <Logo />
      <nav>
        <ul className={css.navigation}>
          {pagesHeader.map((page) => {
            const check =
              page.title === "Услуги и цены" || page.title === "Контакты";
            return (
              <li key={page.id} className={css.menuItem}>
                {check ? (
                  <HashLink smooth to={page.url}>
                    {page.title}
                  </HashLink>
                ) : (
                  <Link to={page.url}>{page.title}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      {authorizationStatus === "AUTH" && userRole === "customers" && (
        <>
          <svg width="30" height="30" viewBox="0 0 30 30">
            <use xlinkHref={`${sprite}#notification`}></use>
          </svg>
          <div className={css.subMenu}>
            <Button
              text={
                userData?.userName !== ""
                  ? `${userData.userName}`
                  : `${userData.emailUser?.split("@")[0]}`
              }
              cls="btn-enter"
              openModalForm={openModalForm}
            ></Button>
            {isOpenModal && <AreaForm openModalForm={openModalForm} />}
          </div>
        </>
      )}

      {authorizationStatus === "AUTH" && userRole === "administrator" && (
        <div className={css.subMenu}>
          <Button
            text="Admin"
            cls="btn-enter"
            openModalForm={openModalForm}
          ></Button>
          {isOpenModal && <AreaForm openModalForm={openModalForm} />}
        </div>
      )}
      {(authorizationStatus === "NO_AUTH" ||
        authorizationStatus === "UNKNOWN" ||
        userRole === "") && (
        <Link to={`${AppRoute.Modal}${AppRoute.Login}`} state={{ previousLocation: location }}>
          <Button
            text="Вход"
            cls="btn-enter"
            // openModalForm={openModalForm}
          ></Button>
          {/* {isOpenModal && <LoginForm openModalForm={openModalForm} />} */}
        </Link>
      )}
    </div>
  );
};

export default Header;
