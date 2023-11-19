import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import css from "./forms.module.scss";
import RecoveryForm from "./RecoveryForm";
import RegistrationForm from "./RegistrationForm";
import classNames from "classnames";
import Close from "../Close/Close";
import useLogin from "../../hooks/useLogin";
import instance from "../../utils/axios";

type IModalFormProps = {
  openModalForm?: () => void;
};

const LoginForm = ({ openModalForm }: IModalFormProps) => {
  const { isLogged, setIsLogged } = useLogin();
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
  };

  //вход пользователя
  const url = "/login";
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    instance({
      method: "POST",
      url: url,
      data: {
        emailuser: item.email,
        password: item.password,
      },
    })
      .then((response) => {
        const rezult = response.data;
        console.log("Данные  = ", rezult);
        setIsLoginForm(!isLoginForm);
        setIsLogged(!isLogged);
        localStorage.setItem("token", rezult.token);
        if (openModalForm) openModalForm();
      })
      .catch((error) => {
        console.log("Ошибка выгрузки", error.response);
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
                  placeholder="example@gmail.com"
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
              <button type="submit">Войти</button>
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
        </div>
      )}
      {isRecovery && <RecoveryForm />}
      {isRegistration && <RegistrationForm />}
    </div>
  );
};

export default LoginForm;
