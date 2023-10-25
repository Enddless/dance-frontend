import { useState } from "react";
import css from './forms.module.scss';

const TelForm = () => {
  const [item, setItem] = useState({
    tel: '',
  });

  const handleChange = (e: { target: { name: string; value: string }}) => {
    setItem({ ...item, [e.target.name]: e.target.value });

    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(item);
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

        <button type="submit">Отправить код</button>
      </form>
    </div>
  )
}

export default TelForm;
