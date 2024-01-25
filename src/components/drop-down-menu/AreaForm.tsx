import css from "./styles.module.scss";
// import classNames from "classnames";
import { Link, Navigate } from "react-router-dom";
import { AppRoute } from "../../const/route";
import { useAppDispatch, useAppSelector } from "../../services/type-service";
import { AuthorizationStatus } from "../../const/const";
import { logout } from "../../services/thunk/auth";
import ControlButton from "../controls-button";
import { useEffect } from "react";

type IModalFormProps = {
  openModalForm?: () => void;
};

const AreaForm = ({ openModalForm }: IModalFormProps) => {
  useEffect(() => {
    const findContainer = document.querySelector("#area");

    setTimeout(() => {
      findContainer?.classList.add(`${css.active}`);
    }, 10);

    return () => {
      setTimeout(() => {
        findContainer?.classList.remove(`${css.active}`);
      }, 10);
    };
  }, []);

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
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className={css.area} id="area">
      <div className={css.decoration}></div>
      <div className={css.closeContainer}>
        <ControlButton id="close" onClick={openModalForm} />
      </div>

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

      <button onClick={handleClick}>Выход</button>
    </div>
  );
};

export default AreaForm;
