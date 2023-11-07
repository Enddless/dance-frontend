import css from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import { pagesFooterColumn1, pagesFooterColumn2 } from "../../mocks/mocks";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.logoPosition}><Logo /></div>

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
      <div className={css.menuItem}>
        <p>Адрес, город, улица, дом</p>
        <p>c 00:00 до 00:00</p>
        <p>+7 (495) 788-77-50</p>
        <p>Мы в социальных сетях:</p>
        <div className={css.social}></div>
        <p>Скачать приложение</p>
      </div>
    </div>
  );
};

export default Footer;
