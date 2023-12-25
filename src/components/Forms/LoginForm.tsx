import { useState } from "react";
import css from "./forms.module.scss";
import RecoveryForm from "./RecoveryForm";
import RegistrationForm from "./RegistrationForm";
import classNames from "classnames";
import Close from "../Close/Close";
import { useAppDispatch } from "../../services/type-service";
import {
  getCurrentUserData,
  getCurrentUserRole,
  login,
} from "../../services/thunk/auth";
import EyeIcon from "../EyeIcon";

type IModalFormProps = {
  openModalForm?: () => void;
};

const LoginForm = ({ openModalForm }: IModalFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [agreement, setAgreement] = useState(false);
  const dispatch = useAppDispatch();
  //состояния форм
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isRecovery, setIsRecovery] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);

  //состояние инпутов главной формы
  const [item, setItem] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setItem({ ...item, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  //вход пользователя
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const emailUser = item.email;
    const password = item.password;
    const data = {
      emailUser,
      password,
    };
    dispatch(login(data))
      .unwrap()
      .then(() => {
        dispatch(getCurrentUserRole());
      })
      .then(() => {
        dispatch(getCurrentUserData());
      })
      .then(() => {
        setIsLoginForm(!isLoginForm);
        if (openModalForm) openModalForm();
      })
      .catch(() => {
        setErrorMessage("Неправильный логин или пароль");
      });
  };

  //состояние переключения "глазика"
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const classNamesList = classNames(css.modalForm, {
    [css.modalFormDisabled]: isRecovery || isRegistration,
  });

  return (
    <div className={css.formWrapper}>
      <Close openModalForm={openModalForm} />
      {isLoginForm && (
        <div className={classNamesList}>
          <h3>Вход</h3>
          <div className={css.container}>
            <form onSubmit={handleSubmit} className={css.form}>
              <label htmlFor="tel">
                Адрес электронной почты
                <input
                  type="email"
                  value={item.email}
                  onChange={handleChange}
                  name="email"
                  className={
                    errorMessage && errorMessage !== ""
                      ? `${css.errorInput}`
                      : ""
                  }
                  placeholder="example@gmail.com"
                />
              </label>

              <fieldset>
                <label htmlFor="password">
                  Пароль
                  <input
                    value={item.password}
                    onChange={handleChange}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className={
                      errorMessage && errorMessage !== ""
                        ? `${css.errorInput}`
                        : ""
                    }
                  />
                  <div className={css.eyeIcon}>
                    <EyeIcon
                      showPassword={showPassword}
                      togglePasswordVisibility={togglePasswordVisibility}
                    />
                  </div>
                </label>
              </fieldset>

              {errorMessage && errorMessage !== "" && (
                <span className={css.error}>Неправильный логин или пароль</span>
              )}
              <button type="submit" className={css.submit}>
                Войти
              </button>
            </form>

            <div className={css.link}>
              <button onClick={() => setIsRegistration(!isRegistration)}>
                Зарегистрироваться
              </button>
              <button onClick={() => setIsRecovery(!isRecovery)}>
                Забыли пароль?
              </button>
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              onChange={() => setAgreement(!agreement)}
            />
            <label htmlFor="agreement" className={css.agreement}>
              Регистрируясь, я соглашаюсь с Условиями пользования и Политикой
              конфиденциалности
            </label>
          </div>
        </div>
      )}
      {isRecovery && <RecoveryForm />}
      {isRegistration && <RegistrationForm />}
    </div>
  );
};

export default LoginForm;
