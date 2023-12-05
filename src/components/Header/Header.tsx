import css from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useState} from "react";
import { pagesHeader } from "../../mocks/mocks";
import LoginForm from "../Forms/LoginForm";
import useTheme from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AreaForm from "../Forms/AreaForm";
import { useAppSelector } from "../../services/type-service";

const Header = () => {
  const { isDark, setIsDark } = useTheme();
  //  открытие модалки регистрации или входа
  const [isOpenModal, setIsModal] = useState(false);
  const openModalForm = () => {
    setIsModal(!isOpenModal);
    setIsDark(!isDark);
  };

  //проверка авторизации пользователя
  const authorizationStatus = useAppSelector((state) => state.auth.authStatus);
  
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

      {authorizationStatus === 'AUTH' ? (
        <>
          <Button
            text="Енот"
            cls="btn-enter"
            openModalForm={openModalForm}
          ></Button>
          {isOpenModal && <AreaForm openModalForm={openModalForm} />}
        </>
      ) : (
        <>
          <Button
            text={"Вход"}
            cls="btn-enter"
            openModalForm={openModalForm}
          ></Button>
          {isOpenModal && <LoginForm openModalForm={openModalForm} />}
        </>
      )}
    </div>
  );
};

export default Header;
