import { useState, useEffect } from "react";
import css from "./forms.module.scss";
import ConfirmationForm from "./ConfirmationForm";
import { useAppDispatch } from "../../services/type-service";
import { registration } from "../../services/thunk/auth";
import EyeIcon from "../EyeIcon";

const RegistrationForm = () => {
  const [checkPassword, setCheckPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    dublPassword: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //регистрация пользователя
  const dispatch = useAppDispatch();
  const [successForm, setSuccessForm] = useState(false);
  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    const emailUser = formData.email;
    const password = formData.password;
    const data = {
      emailUser,
      password,
    };
    dispatch(registration(data))
      .unwrap()
      .then(() => {
        setSuccessForm(!successForm);
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showDoublePassword, setShowDoublePassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleDoublePasswordVisibility = () => {
    setShowDoublePassword(!showDoublePassword);
  };
  //проверка на совпадение паролей
  useEffect(() => {
    if (formData.password === formData.dublPassword) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  }, [formData.password, formData.dublPassword]);

  return (
    <>
      {!successForm ? (
        <>
          <h3>Регистрация</h3>
          <form onSubmit={handleSubmit} className={css.form}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                placeholder="example@mail.com"
              />
            </label>
            <fieldset>
              <label htmlFor="password">
                Пароль
                <input
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
                <div className={css.eyeIcon}>
                  <EyeIcon
                    showPassword={showPassword}
                    togglePasswordVisibility={togglePasswordVisibility}
                  />
                </div>
              </label>
            </fieldset>

            <fieldset>
              <label htmlFor="dublPassword">
                Повторите пароль
                <input
                  value={formData.dublPassword}
                  onChange={handleChange}
                  name="dublPassword"
                  type={showDoublePassword ? "text" : "password"}
                />
                <div className={css.eyeIcon}>
                  <EyeIcon
                    showPassword={showDoublePassword}
                    togglePasswordVisibility={toggleDoublePasswordVisibility}
                  />
                </div>
              </label>
            </fieldset>

            <button
              type="submit"
              disabled={!checkPassword}
              className={!checkPassword ? `${css.disabled}` : ""}
            >
              Зарегистрироваться
            </button>
          </form>
        </>
      ) : (
        <ConfirmationForm email={formData.email} password={formData.password} />
      )}
    </>
  );
};

export default RegistrationForm;
