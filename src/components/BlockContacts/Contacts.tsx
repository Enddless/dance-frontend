import MapBlock from "../Map/Map";
import TitleSection from "../Title/Title";
import css from "./Contacts.module.scss";


const Contacts = () => {
  return (
    <section className={css.contacts} id="contactsBlock">
       <TitleSection title="Контакты"/>
       <MapBlock />
    </section>
  );
};

export default Contacts;
