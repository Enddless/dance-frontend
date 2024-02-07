import css from "./styles.module.scss";
import { useState } from "react";
import { contactsStudio } from "../../../../../../mocks/mocks";

const ContactsSettings = () => {
  const [city, setCity] = useState({
    lat: contactsStudio.city.lat,
    lng: contactsStudio.city.lng,
    zoom: contactsStudio.city.zoom,
  });
  const handleChangeCity = (e: { target: { name: string; value: string } }) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };
  const [location, setLocation] = useState({
    lat: contactsStudio.points.lat,
    lng: contactsStudio.points.lng,
  });
  const handleChangeLocation = (e: {
    target: { name: string; value: string };
  }) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };
  const [address, setAddress] = useState(contactsStudio.address);
  const [tel, setTel] = useState(contactsStudio.phone);
  return (
    <div className={css.container}>
      <fieldset>
        <legend>Контактные данные</legend>
        <input
          type="text"
          value={address}
          placeholder="Введите адрес"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="tel"
          value={tel}
          placeholder="Введите телефон"
          onChange={(e) => setTel(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>Координаты и масштаб города</legend>
        <input
          type="number"
          value={city.lat}
          name="lat"
          placeholder="Широта"
          pattern="[0-9]+(\.[0-9]+)?"
          onChange={handleChangeCity}
        />
        <input
          type="number"
          value={city.lng}
          name="lng"
          placeholder="Долгота"
          pattern="[0-9]+(\.[0-9]+)?"
          onChange={handleChangeCity}
        />
        <input
          type="number"
          value={city.zoom}
          name="zoom"
          placeholder="Масштаб от 1 до 20"
          onChange={handleChangeCity}
        />
      </fieldset>

      <fieldset>
        <legend>Координаты филиалов</legend>
        <input
          type="number"
          value={location.lat}
          name="lat"
          placeholder="Широта"
          pattern="[0-9]+(\.[0-9]+)?"
          onChange={handleChangeLocation}
        />
        <input
          type="number"
          value={location.lng}
          name="lng"
          placeholder="Долгота"
          pattern="[0-9]+(\.[0-9]+)?"
          onChange={handleChangeLocation}
        />
      </fieldset>
    </div>
  );
};

export default ContactsSettings;
