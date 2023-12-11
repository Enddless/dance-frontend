import css from "./NFPage.module.scss";
import nf from "../../assets/images/NF.png";
import { AppRoute } from "../../const/route";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const NFPage = () => {
  return (
    <div className={css.container}>
      <Header />
      <h1>Извините, страница не найдена</h1>
      <p>Но есть другие</p>
      <Link to={AppRoute.Root}>
        <p>Главная страница</p>
      </Link>
      <img src={nf} alt="" width="700" />
      <Footer />
    </div>
  );
};

export default NFPage;
