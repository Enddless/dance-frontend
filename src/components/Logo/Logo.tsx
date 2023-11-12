import css from "./Logo.module.scss";
import logo from "../../assets/logo.png";
import { AppRoute } from "../../const/route";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className={css.logo}>
      <Link to={AppRoute.Root}>
        <img src={logo} alt="Logotype" />
      </Link>
    </div>
  );
};

export default Logo;
