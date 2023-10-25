import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import css from './forms.module.scss';

const GeneralForm = () => {
  const [item, setItem] = useState({
    tel: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: { target: { name: string; value: string }}) => {
    setItem({ ...item, [e.target.name]: e.target.value });

    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(item);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.formWrapper}>
      <h3>Вход</h3>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          Номер телефона
          <input
            type="text"
            value={item.tel}
            onChange={handleChange}
            name='tel'
            placeholder="+7 (000) 0000000"
          />
        </label>

        <label>
          Пароль
          <input
            value={item.password}
            onChange={handleChange}
            name='password'
            type={showPassword ? 'text' : 'password'}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: '110px',
              top: '58%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          />
        </label>

        <a href="#">Восстановить пароль</a>

        <button type="submit">Войти</button>
      </form>
    </div>
  )
}

export default GeneralForm;
