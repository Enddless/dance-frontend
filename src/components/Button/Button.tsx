import css from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  cls?: string ;
  children?: React.ReactNode;
  openModalForm?: () => void;
}

const Button = ({ text, cls, children, openModalForm }: ButtonProps) => {
  const check = cls ==="def" //для других классов, чтобы подставлять сразу в перечень классов
  const classNamesList = classNames(css.btn, {
    [css.def]:check,
  });


  return (
    <button className={classNamesList} onClick={openModalForm}>
      {children}
      {text}
    </button>
  );
};

export default Button;
