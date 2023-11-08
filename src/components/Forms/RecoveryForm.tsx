import { useState } from "react";
import css from "./forms.module.scss";

const RecoveryForm = () => {
  const [inputData, setInputData] = useState("");

  return (
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

      <button type="submit">Отправить пароль на email</button>
    </form>
  );
};

export default RecoveryForm;
