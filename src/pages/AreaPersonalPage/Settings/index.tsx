import sprite from "../../../assets/sprite.svg";
import css from "./styles.module.scss";

interface IUserData {
  id?: number;
  name?: string;
  sexMale?: boolean;
  sexFamale?: boolean;
  tel?: string;
  email?: string;
  dateOfBirth?: string;
}

const userData: IUserData = {
  id: 1,
  name: "Енот",
  sexMale: true,
  sexFamale: false,
  tel: "+7111111111",
  email: "ex@mail.ru",
  dateOfBirth: "01.01.2000",
};

const Settings = () => {
  return (
    <div className={css.container}>
      <div className={css.profileImg}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use xlinkHref={`${sprite}#note`}></use>
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use xlinkHref={`${sprite}#trash`}></use>
        </svg>
      </div>

      <div className={css.form}>
        <label htmlFor="name">ФИО</label>
        <input
          type="text"
          name="name"
          id="name"
          className={css.input}
          value={userData.name}
          disabled
        />

        <label htmlFor="sex">Пол</label>
        <br />
        <input
          type="radio"
          id="female"
          name="female"
          className={css.radio}
          disabled
        />
        <label htmlFor="female" className={css.radioLabel}>
          Ж
        </label>

        <input
          type="radio"
          id="male"
          name="male"
          className={css.radio}
          disabled
          checked
        />
        <label htmlFor="male" className={css.radioLabel}>
          М
        </label>
        <br />

        <label htmlFor="tel">Номер телефона</label>
        <input
          type="text"
          name="tel"
          id="tel"
          className={css.input}
          value={userData.tel}
          disabled
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className={css.input}
          value={userData.email}
          disabled
        />

        <label htmlFor="date">Дата рождения</label>
        <input
          type="text"
          name="date"
          id="date"
          className={css.input}
          value={userData.dateOfBirth}
          disabled
        />

        <button>Удалить профиль</button>
      </div>
    </div>
  );
};

export default Settings;
