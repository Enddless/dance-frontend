import { useState } from "react";
import css from "./styles.module.scss";
import { useAppSelector } from "../../../services/type-service";
import Spinner from "../../../components/Spinner";
import ProfileImg from "./ProfileImg";

const Settings = () => {
  const userData = useAppSelector((state) => state.auth.userData);
  const [userInput, setUserInput] = useState({
    id: userData?.id,
    name: userData?.userName,
    gender: userData?.genders,
    tel: userData?.phoneNumber,
    email: userData?.emailUser,
    dateOfBirth: userData?.dateOfBirth,
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  if (!userData) {
    <Spinner />;
  }

  return (
    <section className={css.container}>
      <form className={css.form}>
        <ProfileImg />

        <div className={css.info}>
          <fieldset>
            <p>Имя</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Введите имя"
              className={css.input}
              value={userInput.name}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <p>Пол</p>
            <div className={css.inputGroup}>
              <input
                type="radio"
                id="female"
                name="radio"
                className={css.radio}
                value={userInput.gender}
                onChange={handleChange}
              />
              <label htmlFor="female" className={css.radioLabel}>
                Ж
              </label>

              <input
                type="radio"
                id="male"
                name="radio"
                className={css.radio}
                value={userInput.gender}
                onChange={handleChange}
              />
              <label htmlFor="male" className={css.radioLabel}>
                М
              </label>
            </div>
          </fieldset>

          <fieldset>
            <p>Номер телефона</p>
            <input
              type="text"
              name="tel"
              id="tel"
              placeholder="+71111111111"
              className={css.input}
              value={userInput.tel}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <p>E-mail</p>
            <input
              type="email"
              name="email"
              id="email"
              className={css.input}
              value={userInput.email}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <p>Дата рождения</p>
            <input
              type="date"
              name="date"
              id="date"
              className={css.input}
              value=""
              onChange={handleChange}
            />
          </fieldset>

          <button>Удалить профиль</button>
        </div>
      </form>
    </section>
  );
};

export default Settings;
