import {  useState } from "react";
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

  const confirmSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const code = Number(codeData);
    const data = {
      emailUser: email,
      password,
      code,
    };
    dispatch(confirmation(data));
  };

  return (
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
  );
};

export default ConfirmationForm;
