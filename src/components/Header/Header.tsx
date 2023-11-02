import css from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useState } from "react";
import { pagesHeader } from "../../mocks/mocks";
import GeneralForm from "../Forms/GeneralForm";

const Header = () => {
  const [isOpenModal, setIsModal] = useState(false);
  const openModalForm = () => {
    setIsModal(!isOpenModal)
  };
  return (
    <div className={css.header}>
      <Logo />
      <nav>
        <ul className={css.navigation}>
          {pagesHeader.map((page) => {
            return (
              <li key={page.id} className={css.menuItem}>
                <a href={page.url}>{page.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      <Button text="Вход" openModalForm={openModalForm}></Button>
      {isOpenModal && <GeneralForm />}
    </div>
  );
};

export default Header;
