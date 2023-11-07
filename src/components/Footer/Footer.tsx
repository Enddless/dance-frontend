import css from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import { pagesFooter } from "../../mocks/mocks";
import sprite from "../../assets/sprite.svg";

const Footer = () => {
  return (
    <div className={css.footer}>
      <Logo />
      <ul className={css.menuItem}>
        {pagesFooter.map((page) => {
          return (
            <li key={page.id} className={css.menuItem}>
              {page.title}
            </li>
          );
        })}
      </ul>
      <div className={css.contacts}>

        <div className={css.location}>
          <svg width="17" height="17" viewBox="0 0 17 17">
            <use xlinkHref={`${sprite}#location`}></use>
          </svg>
          <p>Адрес, город, улица, дом <br/>c 00:00 до 00:00</p>
        </div>

        <div className={css.phone}>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <use xlinkHref={`${sprite}#phone`}></use>
          </svg>
          <p>+7 (495) 788-77-50</p>
        </div>

        <p>Мы в социальных сетях:</p>
        <div className={css.social}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <use xlinkHref={`${sprite}#ok`}></use>
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <use xlinkHref={`${sprite}#vk`}></use>
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <use xlinkHref={`${sprite}#telegram`}></use>
          </svg>
        </div>
        <p className={css.download}>Скачать приложение</p>
      </div>
    </div>
  );
};

export default Footer;
