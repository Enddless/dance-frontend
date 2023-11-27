import css from "./styles.module.scss";

const Settings = () => {
  return (
    <div className={css.container}>
      <div className={css.profileImg}></div>

      <div className={css.form}>
        <label htmlFor="name">ФИО</label>
        <input type="text" name="name" id="name" className={css.input} />

        <label htmlFor="sex">Пол</label>
        <br />
        <input type="radio" id="female" name="female" className={css.radio} />
        <label htmlFor="female" className={css.radioLabel}>
          Ж
        </label>

        <input type="radio" id="male" name="male" className={css.radio} />
        <label htmlFor="male" className={css.radioLabel}>
          М
        </label>
        <br />

        <label htmlFor="tel">Номер телефона</label>
        <input type="text" name="tel" id="tel" className={css.input} />

        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" className={css.input} />

        <label htmlFor="date">Дата рождения</label>
        <input type="date" name="date" id="date" className={css.input} />

        <button>Удалить профиль</button>
      </div>
    </div>
  );
};

export default Settings;
