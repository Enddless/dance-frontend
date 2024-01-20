import css from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  cls?: string;
  children?: React.ReactNode;
  openModalForm?:
    | (() => void)
    | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
  activeMenuUser?: boolean;
}

const Button = ({
  text,
  cls,
  children,
  openModalForm,
  onMouseEnter,
  onMouseLeave,
  disabled,
  activeMenuUser,
}: ButtonProps) => {
  //классы для нажатых кнопок, переделать в switch/case
  const enterButton = cls === "btn-enter";
  const more = cls === "btn-more";
  const regButton = cls === "btn-reg";
  const disabledButton = cls === "btn-dis" || disabled;
  // user
  const menuAreaUser = cls === "menuAreaUser";
  const activeMenu = activeMenuUser;
  const saveButton = cls === "btn-save";
  const deleteButton = cls === "btn-del";
  //admin
  const add = cls === "add";

  const classNamesList = classNames(css.btn, {
    [css.btnEnter]: enterButton,
    [css.btnMore]: more,
    [css.btnRegistration]: regButton,
    [css.btnDisabled]: disabledButton,
    [css.btnMenuUser]: menuAreaUser,
    [css.activeMenuUser]: activeMenu,
    [css.btnSave]: saveButton,
    [css.btnDelete]: deleteButton,
    [css.btnAdd]: add,
  });

  return (
    <button
      className={classNamesList}
      onClick={openModalForm}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
