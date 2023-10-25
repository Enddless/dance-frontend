import css from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

import { pagesHeader } from "../../mocks/mocks";

const Header = () => {
  //
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

      <Button text="Вход"></Button>
    </div>
  );
};

export default Header;
