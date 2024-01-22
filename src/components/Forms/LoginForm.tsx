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
import Button from "../Button/Button";

type IModalFormProps = {
  openModalForm?: () => void;
};

const LoginForm = ({ openModalForm }: IModalFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
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
    <div className={css.wrapper}>
      <Close openModalForm={openModalForm} />
      {isLoginForm && (
        <div className={classNamesList}>
          <h3>Вход</h3>
          <div className={css.content}>
            <form onSubmit={handleSubmit} className={css.form}>
              <fieldset>
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
                {errorMessage && errorMessage !== "" && (
                  <span className={css.errorMessage}>
                    Неправильный логин или пароль
                  </span>
                )}
              </fieldset>

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
                    placeholder="*****"
                  />
                  <div className={css.eyeIcon}>
                    <EyeIcon
                      showPassword={showPassword}
                      togglePasswordVisibility={togglePasswordVisibility}
                    />
                  </div>
                </label>
              </fieldset>

              <div className={css.linkGroup}>
                <label onClick={() => setIsRegistration(!isRegistration)}>
                  Зарегистрироваться
                </label>
                <label onClick={() => setIsRecovery(!isRecovery)}>
                  Забыли пароль?
                </label>
              </div>
              <Button text="Войти" cls="btn-reg"/>
            </form>
          </div>
        </div>
      )}
      {isRecovery && <RecoveryForm />}
      {isRegistration && <RegistrationForm />}
    </div>
  );
};

export default LoginForm;
