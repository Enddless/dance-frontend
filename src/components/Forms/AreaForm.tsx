import css from "./forms.module.scss";
import Close from "../Close/Close";
import classNames from "classnames";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const/route";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import { getCurrentUserData } from "../../services/thunk/userData";

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

  console.log(localStorage.getItem("token"));
  //определение роли пользователя
  const role = useAppSelector((state) => state.user.userData)?.role;

  console.log(role);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUserData());
  }, [dispatch]);
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
