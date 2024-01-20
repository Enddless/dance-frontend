import css from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import { pagesFooter } from "../../mocks/mocks";
import sprite from "../../assets/sprite.svg";
import SocialLinks from "../SocialLinks/SocialLinks";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.logo}>
        <Logo />
      </div>

      <ul className={css.footerNav}>
        <li className={css.menuItem}>
          <Link to="/">Скачать приложение</Link>
        </li>
        <li>
          <ul className={css.centerMenu}>
            {pagesFooter.map((page) => {
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
        </li>
        <li className={css.menuItem}>
          <Link to="/">Юридическая информация</Link>
        </li>
      </ul>

      <div className={css.contacts}>
        <div className={css.location}>
          <div style={{ width: "24" }}>
            <svg width="25" height="25" viewBox="0 0 25 25">
              <use xlinkHref={`${sprite}#location`}></use>
            </svg>
          </div>
          <p>
            Южно-Сахалинск, Коммунистический проспект, 20, <br />c 09:00 до
            21:00
          </p>
        </div>

        <div className={css.phone}>
          <svg width="25" height="25" viewBox="0 0 25 25">
            <use xlinkHref={`${sprite}#phone`}></use>
          </svg>
          <p>
            <a href="tel:+74957887750">+7 (495) 788-77-50</a>
          </p>
        </div>

        <div className={css.socialBlock}>
          <p>Мы в социальных сетях:</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
