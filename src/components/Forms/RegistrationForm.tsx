import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import css from "./forms.module.scss";
import ConfirmationForm from "./ConfirmationForm";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import { registration } from "../../services/thunk/auth";

const RegistrationForm = () => {
  const registrationStatus = useAppSelector(
    (state) => state.auth.isRegistrationLoading
  );
  useEffect(() => {
    if (registrationStatus === "fulfilled") {
      setSuccessForm(!successForm);
    }
  }, [registrationStatus]);

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
    dispatch(registration(data));
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <h3>Регистрация</h3>
      {!successForm ? (
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
          <label htmlFor="password">
            Пароль
            <input
              value={formData.password}
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
          <label htmlFor="dublPassword">
            Повторите пароль
            <input
              value={formData.dublPassword}
              onChange={handleChange}
              name="dublPassword"
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

          <button
            type="submit"
            disabled={!checkPassword}
            className={!checkPassword ? `${css.disabled}` : ""}
          >
            Зарегистрироваться
          </button>
        </form>
      ) : (
        <ConfirmationForm email={formData.email} password={formData.password} />
      )}
    </>
  );
};

export default RegistrationForm;
