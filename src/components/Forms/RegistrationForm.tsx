import { useState, useEffect } from "react";
import css from "./forms.module.scss";
import ConfirmationForm from "./ConfirmationForm";
import { useAppDispatch } from "../../services/type-service";
import { registration } from "../../services/thunk/auth";
import EyeIcon from "../EyeIcon";
import InputCheckbox from "../Input-checkbox";

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

  const [agreement, setAgreement] = useState(false);
  const handleAgree = () => {
    setAgreement(!agreement);
  };

  //валидность на совпадение паролей
  useEffect(() => {
    if (formData.password === formData.dublPassword) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  }, [formData.password, formData.dublPassword]);

  const [isValidForm, setIsValidForm] = useState(false);
  useEffect(() => {
    if (agreement && checkPassword) {
      setIsValidForm(true);
    } else setIsValidForm(false);
  }, [agreement, checkPassword]);
  return (
    <>
      {!successForm ? (
        <>
          <h3>Регистрация</h3>
          <form onSubmit={handleSubmit} className={css.form}>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                placeholder="example@mail.com"
                // pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="password">Пароль</label>
              <input
                value={formData.password}
                onChange={handleChange}
                name="password"
                type={showPassword ? "text" : "password"}
                className={!checkPassword ? `${css.errorInput}` : ""}
              />
              <div className={css.eyeIcon}>
                <EyeIcon
                  showPassword={showPassword}
                  togglePasswordVisibility={togglePasswordVisibility}
                />
              </div>
            </fieldset>

            <fieldset>
              <label htmlFor="dublPassword">Повторите пароль</label>
              <input
                value={formData.dublPassword}
                onChange={handleChange}
                name="dublPassword"
                type={showDoublePassword ? "text" : "password"}
                className={!checkPassword ? `${css.errorInput}` : ""}
              />
              <div className={css.eyeIcon}>
                <EyeIcon
                  showPassword={showDoublePassword}
                  togglePasswordVisibility={toggleDoublePasswordVisibility}
                />
              </div>

              {!checkPassword &&
                (formData.password !== "" || formData.dublPassword !== "") && (
                  <p className={css.errorMessage}>Пароли должны совпадать</p>
                )}
            </fieldset>

            <button
              type="submit"
              disabled={!isValidForm}
              className={!isValidForm ? `${css.disabled}` : ""}
            >
              Зарегистрироваться
            </button>
            <div className={css.agreement}>
              <InputCheckbox onChange={handleAgree} agreement={(formData.password !== "" || formData.dublPassword !== "") ? agreement : ""}/>
              <label htmlFor="agreement" >
                Регистрируясь, я соглашаюсь с Условиями пользования и Политикой
                конфиденциалности
              </label>
            </div>
          </form>
        </>
      ) : (
        <ConfirmationForm email={formData.email} password={formData.password} />
      )}
    </>
  );
};

export default RegistrationForm;
