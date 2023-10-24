import css from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import { pagesFooterColumn1, pagesFooterColumn2 } from "../../mocks/mocks";

const Footer = () => {
  return (
    <div className={css.footer}>
      <Logo />

      <ul className={css.menuItem}>
        {pagesFooterColumn1.map((page) => {
          return (
            <li key={page.id} className={css.menuItem}>
              {page.data.title}
            </li>
          );
        })}
      </ul>

      <ul className={css.menuItem}>
        {pagesFooterColumn2.map((page) => {
          return (
            <li key={page.id} className={css.menuItem}>
              {page.data.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
