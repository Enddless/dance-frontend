import css from "./NFPage.module.scss";
import nf from "../../assets/images/NF.png";
import { AppRoute } from "../../const/route";
import { Link } from "react-router-dom";
const NFPage = () => {
  return (
    <div className={css.container}>
      <h1>ПЭЙДЖ НОТ ФАУНД</h1>
      <Link to={AppRoute.Root}>
        <p> гоу ту главная страница</p>
      </Link>
      <img src={nf} alt="" width="700" />
    </div>
  );
};

export default NFPage;
