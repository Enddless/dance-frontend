import css from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  cls?: string;
  activeClass?: string;
  children?: React.ReactNode;
  openModalForm?:
    | (() => void)
    | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean,
}

const Button = ({
  text,
  cls,
  activeClass,
  children,
  openModalForm,
  onMouseEnter,
  onMouseLeave, disabled,
}: ButtonProps) => {
  //классы для нажатых кнопок, переделать в switch/case
  const enterButton = cls === "btn-enter";
  const more = cls === "btn-more";
  const menuAreaButton = cls === "menuAreaButton";
  const add = cls === "add";
  const saveButton = cls === "btn-save";
  const deleteButton = cls === "btn-del";
  const disabledButton = cls === "btn-dis";
  const classNamesList = classNames(css.btn, {
    [css.btnEnter]: enterButton,
    [css.btnMore]: more,
    [css.menuAreaButton]: menuAreaButton,
    [css.active]: activeClass,
    [css.saveButton]: saveButton,
    [css.deleteButton]: deleteButton,
    [css.add]: add,
    [css.btnDisabled]: disabledButton,
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
