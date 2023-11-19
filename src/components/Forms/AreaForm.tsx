import css from "./forms.module.scss";
import Close from "../Close/Close";
import classNames from "classnames";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const/route";
import { useNavigate } from "react-router-dom";
import instance from "../../utils/axios";
import { useState, useEffect } from "react";

type IModalFormProps = {
  openModalForm?: () => void;
};

const AreaForm = ({ openModalForm }: IModalFormProps) => {
  const navigate = useNavigate();
  const { setIsLogged } = useLogin();
  const classNamesList = classNames(css.formWrapper, css.area);

  //выход из аккаунта
  const handleClick = () => {
    setIsLogged(false);
    if (openModalForm) openModalForm();
    navigate(AppRoute.Root);
    localStorage.removeItem("token");
  };

  //определение роли пользователя
  const [role, setRole] = useState("");
  const token = localStorage.getItem("token");
  const url = "/accessAccount";

  useEffect(() => {
    instance({
      method: "POST",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const rezult = response.data;
        console.log("Роль пользователя  = ", rezult);
        setRole(rezult.role);
      })
      .catch((error) => {
        console.log("Ошибка", error.response);
      });
  }, [token]);

  if (!role) return false;
  return (
    <div className={classNamesList}>
      <Close openModalForm={openModalForm} />

      {role === "customers" && (
        <button>
          <Link to={AppRoute.PersonalArea}>Профиль</Link>
        </button>
      )}
      {role === "director" && (
        <button>
          <Link to={AppRoute.AdministratorArea}>Профиль</Link>
        </button>
      )}

      <button onClick={handleClick}>Выход из аккаунта</button>
    </div>
  );
};

export default AreaForm;
