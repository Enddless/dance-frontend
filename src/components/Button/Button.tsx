import css from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  cls?: string;
  activeClass?: string;
  children?: React.ReactNode;
  openModalForm?: () => void;

}

const Button = ({ text, cls, activeClass, children, openModalForm  }: ButtonProps) => {
  //классы для нажатых кнопок
  const enterButton = cls === "btn-enter";
  const more = cls === "btn-more";
  const menuAreaButton = cls === "menuAreaButton";
  const classNamesList = classNames(css.btn, {
    [css.btnEnter]: enterButton,
    [css.btnMore]: more,
    [css.menuAreaButton]: menuAreaButton,
    [css.active]: activeClass,
  });

  
  return (
    <button className={classNamesList} onClick={openModalForm}>
      {children}
      {text}
    </button>
  );
};

export default Button;
