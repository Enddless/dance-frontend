import css from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useState } from "react";
import { pagesHeader } from "../../mocks/mocks";
import LoginForm from "../Forms/LoginForm";
import useTheme from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AppRoute } from "../../const/route";

const Header = () => {
  const { isDark, setIsDark } = useTheme();

  const [isOpenModal, setIsModal] = useState(false);
  const openModalForm = () => {
    setIsModal(!isOpenModal);
    setIsDark(!isDark);
  };

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

      <Button text="Вход" openModalForm={openModalForm}></Button>

      {isOpenModal && <LoginForm openModalForm={openModalForm} />}
    </div>
  );
};

export default Header;
