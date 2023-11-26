import Button from "../../../components/Button/Button";
import css from "./styles.module.scss";

const ChangePassword = () => {
  return (
    <div className={css.container}>
      <div className={css.form}>
        <label htmlFor="currentPassword">Текущий пароль</label>
        <input
          type="password"
          name="currentPassword"
          id="currentPassword"
          className={css.checkbox}
        />

        <label htmlFor="newPassword">Новый пароль</label>
        <input
          type="password"
          name="newPassword"
          id="newPassword"
          className={css.checkbox}
        />

        <label htmlFor="doubleNewPassword">Подтвердите пароль</label>
        <input
          type="password"
          name="doubleNewPassword"
          id="doubleNewPassword"
          className={css.checkbox}
        />

        <Button text="Сменить пароль" cls="btn-enter" />
      </div>
    </div>
  );
};

export default ChangePassword;
