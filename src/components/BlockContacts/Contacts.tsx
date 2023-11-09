import MapBlock from "../Map/Map";
import SocialLinks from "../SocialLinks/SocialLinks";
import TitleSection from "../Title/Title";
import css from "./Contacts.module.scss";
import sprite from "../../assets/sprite.svg";

const Contacts = () => {
  return (
    <section className={css.contacts} id="contactsBlock">
      <TitleSection title="Контакты" />
      <MapBlock />
      <div className={css.info}>
        <div className={css.location}>
          <svg width="17" height="17" viewBox="0 0 17 17">
            <use xlinkHref={`${sprite}#location`}></use>
          </svg>
          <p>Адрес, город, улица, дом</p>
        </div>

        <div className={css.phone}>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <use xlinkHref={`${sprite}#phone`}></use>
          </svg>
          <p>+7 (495) 788-77-50</p>
        </div>

        <p>Мы в социальных сетях:</p>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Contacts;
