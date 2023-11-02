import css from "./Logo.module.scss"
import logo from "../../assets/logo.png"
const Logo = () => {
  return (
    <div className={css.logo}>
      <img src={logo} alt="Logotype" />
    </div>
  );
};

export default Logo;
