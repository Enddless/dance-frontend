import css from "./forms.module.scss";
import Close from "../Close/Close";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const/route";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import { getCurrentUserData } from "../../services/thunk/auth";
import { authSlice } from "../../store/slices/auth";


type IModalFormProps = {
  openModalForm?: () => void;
};

const AreaForm = ({ openModalForm }: IModalFormProps) => {
  const classNamesList = classNames(css.formWrapper, css.area);

  //выход из аккаунта
  const handleClick = () => {
    dispatch(authSlice.actions.logout());
  };

  //проверка авторизации пользователя
  const authorizationStatus = useAppSelector((state) => state.auth.authStatus);

  //определение роли пользователя
  const role = useAppSelector((state) => state.auth.userData)?.role;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUserData());
  }, [dispatch]);

  if (!role && authorizationStatus !== "AUTH") return false;

  return (
    <div className={classNamesList}>
      <Close openModalForm={openModalForm} />

      {role === "customers" && (
        <button onClick={openModalForm}>
          <Link to={AppRoute.PersonalArea}>Профиль</Link>
        </button>
      )}
      {role === "director" && (
        <button onClick={openModalForm}>
          <Link to={AppRoute.AdministratorArea}>Профиль</Link>
        </button>
      )}

      <button onClick={handleClick}>Выход из аккаунта</button>
    </div>
  );
};

export default AreaForm;
