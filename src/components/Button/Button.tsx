import css from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  cls?: string ;
  children?: React.ReactNode;
}

const Button = ({ text, cls, children }: ButtonProps) => {
  const check = cls ==="def" //для других классов, чтобы подставлять сразу в перечень классов
  const classNamesList = classNames(css.btn, {
    [css.def]:check,
  });


  return (
    <button className={classNamesList}>
      {children}
      {text}
    </button>
  );
};

export default Button;
