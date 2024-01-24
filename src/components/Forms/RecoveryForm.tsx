import { useEffect, useState } from "react";
import css from "./forms.module.scss";
import Button from "../Button/Button";
import { useAppDispatch } from "../../services/type-service";
import { authSlice } from "../../store/slices/auth";

const RecoveryForm = () => {
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState("");
  const handleBack = () => {
    dispatch(authSlice.actions.changeFormActive("login"));
  };
  const [isValidForm, setIsValidForm] = useState(false);
  useEffect(() => {
    if (inputData !== "") {
      setIsValidForm(true);
    } else setIsValidForm(false);
  }, [inputData]);

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

        <Button
          text="Отправить пароль на email"
          cls="btn-reg"
          disabled={!isValidForm}
        />
      </form>
      <label className={css.backButton} onClick={handleBack}>
        Назад
      </label>
    </>
  );
};

export default RecoveryForm;
