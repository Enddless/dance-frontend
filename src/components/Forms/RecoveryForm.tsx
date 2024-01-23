import { useState } from "react";
import css from "./forms.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const/route";

const RecoveryForm = () => {
  const [inputData, setInputData] = useState("");

  return (
    <>
      <h3>Восстановление пароля</h3>
      <form //onSubmit={""}
        className={css.form}
      >
        <label>
          Email
          <input
            type="email"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            name="email"
            placeholder="example@mail.com"
          />
        </label>

        <Button text="Отправить пароль на email" cls="btn-reg" />
      </form>
      <Link
        to={`${AppRoute.Modal}${AppRoute.Login}`}
        state={{ previousLocation: location }}
      >
        <label>Назад</label>
      </Link>
    </>
  );
};

export default RecoveryForm;
