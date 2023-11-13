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
          <div>
            <svg width="25" height="33" viewBox="0 0 25 33">
              <use xlinkHref={`${sprite}#location`}></use>
            </svg>
          </div>
          <p>Южно-Сахалинск, Коммунистический проспект, 20,</p>
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
    </section>
  );
};

export default Contacts;
