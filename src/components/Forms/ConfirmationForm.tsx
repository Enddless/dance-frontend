import { useEffect, useState } from "react";
import css from "./forms.module.scss";
import { useAppDispatch } from "../../services/type-service";
import { confirmation } from "../../services/thunk/auth";
import Button from "../Button/Button";

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
  const [isValidForm, setIsValidForm] = useState(false);
  useEffect(() => {
    if (codeData !== "") {
      setIsValidForm(true);
    } else setIsValidForm(false);
  }, [codeData]);

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

        <Button text="Подтвердить" cls="btn-reg" disabled={!isValidForm} />
      </form>
    </>
  ) : (
    <>
      <p>Вы успешно зарегистрированы</p>
    </>
  );
};

export default ConfirmationForm;
