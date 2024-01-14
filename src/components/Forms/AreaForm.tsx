import css from "./forms.module.scss";
import Close from "../Close/Close";
import classNames from "classnames";
import { Link, Navigate } from "react-router-dom";
import { AppRoute } from "../../const/route";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import { AuthorizationStatus } from "../../const/const";
import { logout } from "../../services/thunk/auth";

type IModalFormProps = {
  openModalForm?: () => void;
};

const AreaForm = ({ openModalForm }: IModalFormProps) => {
  const classNamesList = classNames(css.formWrapper, css.area);
  //выход из аккаунта
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        localStorage.removeItem("user");
      });
    if (openModalForm) {
      openModalForm();
    }
  };

  //проверка авторизации пользователя
  const authorizationStatus = useAppSelector((state) => state.auth.authStatus);
  const role = useAppSelector((state) => state.auth.userRole)?.role;

  if (authorizationStatus !== AuthorizationStatus.Auth || role === "") {
    <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className={classNamesList}>
      <Close openModalForm={openModalForm} />

      {role === "customers" && (
        <button onClick={openModalForm}>
          <Link to={AppRoute.PersonalArea}>Профиль</Link>
        </button>
      )}
      {role === "administrator" && (
        <button onClick={openModalForm}>
          <Link to={AppRoute.AdministratorArea}>Профиль</Link>
        </button>
      )}

      <button onClick={handleClick}>Выход из аккаунта</button>
    </div>
  );
};

export default AreaForm;
