import { useState } from "react";
import css from "./forms.module.scss";
import Button from "../Button/Button";

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

        <Button text="Отправить пароль на email" cls="btn-reg"/>
      </form>
    </>
  );
};

export default RecoveryForm;
