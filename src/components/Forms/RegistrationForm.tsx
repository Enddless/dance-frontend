import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import css from "./forms.module.scss";

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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
    </>
  );
};

export default RegistrationForm;
