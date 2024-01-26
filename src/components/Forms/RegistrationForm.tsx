import { useState, useEffect } from "react";
import css from "./forms.module.scss";
import ConfirmationForm from "./ConfirmationForm";
import { useAppDispatch } from "../../services/type-service";
import { registration } from "../../services/thunk/auth";
import EyeIcon from "../EyeIcon";
import InputCheckbox from "../Input-checkbox";
import Button from "../Button/Button";
import { authSlice } from "../../store/slices/auth";

const RegistrationForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    dublPassword: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setErrorMessage("");
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
      })
      .catch(() => {
        setErrorMessage("Такой логин уже существует");
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showDoublePassword, setShowDoublePassword] = useState(false);

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
    if (
      agreement &&
      checkPassword &&
      formData.email !== "" &&
      formData.password !== "" &&
      formData.dublPassword !== ""
    ) {
      setIsValidForm(true);
    } else setIsValidForm(false);
  }, [
    agreement,
    checkPassword,
    formData.password,
    formData.dublPassword,
    formData.email,
  ]);
  const handleBack = () => {
    dispatch(authSlice.actions.changeFormActive("login"));
  };
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
                className={
                  errorMessage && errorMessage !== "" ? `${css.errorInput}` : ""
                }
              />
              {errorMessage && errorMessage !== "" && (
                <span className={css.errorMessage}>
                  Пользователь с таким email уже зарегистрирован
                </span>
              )}
              {formData.email === "" &&
                formData.password !== "" &&
                formData.dublPassword !== "" && (
                  <span className={css.errorMessage}>
                    Нужно заполнить email
                  </span>
                )}
            </fieldset>
            <fieldset>
              <label htmlFor="password">Пароль</label>
              <input
                value={formData.password}
                onChange={handleChange}
                name="password"
                type={showPassword ? "text" : "password"}
                className={!checkPassword ? `${css.errorInput}` : ""}
                placeholder="*****"
              />
              <div className={css.eyeIcon}>
                <EyeIcon
                  showPassword={showPassword}
                  togglePasswordVisibility={() =>
                    setShowPassword(!showPassword)
                  }
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
                placeholder="*****"
              />
              <div className={css.eyeIcon}>
                <EyeIcon
                  showPassword={showDoublePassword}
                  togglePasswordVisibility={() =>
                    setShowDoublePassword(!showDoublePassword)
                  }
                />
              </div>

              {!checkPassword &&
                (formData.password !== "" || formData.dublPassword !== "") && (
                  <p className={css.errorMessage}>Пароли должны совпадать</p>
                )}
            </fieldset>

            <Button
              text="Зарегистрироваться"
              cls="btn-reg"
              disabled={!isValidForm}
            />
            <div className={css.agreement}>
              <InputCheckbox
                onChange={handleAgree}
                agreement={
                  formData.password !== "" || formData.dublPassword !== ""
                    ? agreement
                    : ""
                }
              />
              <label htmlFor="agreement" className={css.agreeCheckbox}>
                Регистрируясь, я соглашаюсь с Условиями пользования и Политикой
                конфиденциалности
              </label>
            </div>
          </form>

          <label className={css.backButton} onClick={handleBack}> Назад </label>
        </>
      ) : (
        <ConfirmationForm email={formData.email} password={formData.password} />
      )}
    </>
  );
};

export default RegistrationForm;
