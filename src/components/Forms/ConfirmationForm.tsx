import { useState } from "react";
import css from "./forms.module.scss";
import { useAppDispatch } from "../../services/type-service";
import { confirmation } from "../../services/thunk/auth";

type ICodeProps = {
  email: string;
  password: string;
};
const ConfirmationForm = ({ email, password }: ICodeProps) => {
  const dispatch = useAppDispatch();
  const [codeData, setCodeData] = useState("");
  const [success, setSuccess] = useState(false);

  const confirmSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const code = Number(codeData);
    const data = {
      emailUser: email,
      password,
      code,
    };
    dispatch(confirmation(data))
      .unwrap()
      .then(() => {
        setSuccess(!success);
      });
  };

  return !success ? (
    <>
      <h3>Подтверждение регистрации</h3>
      <form onSubmit={confirmSubmit} className={css.form}>
        <label>
          Код
          <input
            type="number"
            value={codeData}
            onChange={(e) => setCodeData((e.target as HTMLInputElement).value)}
            name="code"
            placeholder="****"
          />
        </label>

        <button type="submit">Подтвердить</button>
      </form>
    </>
  ) : (
    <>
      <p>Вы успешно зарегистрированы</p>
    </>
  );
};

export default ConfirmationForm;
