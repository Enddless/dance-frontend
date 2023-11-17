import css from "./forms.module.scss";
import Close from "../Close/Close";
import classNames from "classnames";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const/route";


type IModalFormProps = {
  openModalForm?: () => void;
  
};

const AreaForm = ({ openModalForm }: IModalFormProps) => {

  const { setIsLogged } = useLogin();
  const classNamesList = classNames(css.formWrapper, css.area);

  const handleClick = () => {
    setIsLogged(false)
    if (openModalForm) openModalForm()
  }
  return (
    <div className={classNamesList}>
      <Close openModalForm={openModalForm} />
      {/* этот блок скорректировать, когда будет работать вход в ЛК
      {role === "person" && <Link to={AppRoute.PersonalArea}>Личный кабинет</Link>}    
       {role === "administrator" && <Link to={AppRoute.AdministratorArea}>Личный кабинет</Link>}   */}
      <Link to={AppRoute.PersonalArea}>Личный кабинет</Link>
      <button onClick={handleClick}>Выход из аккаунта</button>
    </div>
  );
};

export default AreaForm;
