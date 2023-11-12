import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import css from "./forms.module.scss";
import RecoveryForm from "./RecoveryForm";
import RegistrationForm from "./RegistrationForm";
import classNames from "classnames";
import Close from "../Close/Close";


type IModalFormProps = {
  openModalForm?: () => void;
};

const LoginForm = ({ openModalForm }: IModalFormProps) => {
  //состояния форм
  const [isLoginForm, setIsLoginForm] = useState(true);
  console.log(setIsLoginForm);
  const [isRecovery, setIsRecovery] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);

  
  //состояние инпутов главной формы
  const [item, setItem] = useState({
    tel: "",
    password: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
          <form onSubmit={handleSubmit} className={css.form}>
            <label htmlFor="tel">
              Номер телефона
              <input
                type="text"
                value={item.tel}
                onChange={handleChange}
                name="tel"
                placeholder="+7 (000) 0000000"
              />
            </label>

            <label htmlFor="password">
              Пароль
              <input
                value={item.password}
                onChange={handleChange}
                name="password"
                type={showPassword ? "text" : "password"}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "110px",
                  top: "56%",
                  transform: "translateY(-56%)",
                  cursor: "pointer",
                }}
              />
            </label>

            <div className={css.link}>
              <button onClick={() => setIsRecovery(!isRecovery)}>
                Восстановить пароль
              </button>
              <button onClick={() => setIsRegistration(!isRegistration)}>
                Зарегистрироваться
              </button>
            </div>

            <button type="submit">Войти</button>
          </form>
        </div>
      )}
      {isRecovery && <RecoveryForm />}
      {isRegistration && <RegistrationForm />}
    </div>
  );
};

export default LoginForm;
