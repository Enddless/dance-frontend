import { useState} from "react";
import css from "./forms.module.scss";
import instance from "../../utils/axios";
import { useNavigate } from "react-router-dom";

type ICodeProps = {
  email: string;
  password: string;
};
const ConfirmationForm = ({email, password}: ICodeProps) => {
  const navigate = useNavigate();
  //регистрация пользователя
  const [codeData, setCodeData] = useState("");
  const urlConfirm = "http://localhost:8585/confirmation";
  const confirmSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    instance({
      method: 'POST',
      url: urlConfirm,
      data: {
        "emailuser": email,
        "password": password,
        "code": Number(codeData),
      },
    }).then((response) => {
      const rezult = response.data;
      console.log("Данные  = ", rezult);
      navigate("/")
    })
    .catch((error) => {
      console.log('Ошибка выгрузки сводки', error.response);
    });
  };

  return (
    <form onSubmit={confirmSubmit}
      className={css.form}
    >
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
