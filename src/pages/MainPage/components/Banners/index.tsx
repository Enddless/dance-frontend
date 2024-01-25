import { Link } from "react-router-dom";
import SliderBlock from "../../../../components/Slider/SliderBlock";
import { useAppSelector } from "../../../../services/type-service";
import css from "./styles.module.scss";
import { AppRoute } from "../../../../const/route";

const Banners = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const bannerUrl = main?.Banners;

  return (
    <section className={css.banners}>
      {bannerUrl ? (
        <SliderBlock cards={bannerUrl} />
      ) : (
        <p className={css.atention}>
          Здесь еще нет баннеров. Добавить их можно в личном кабинете
          <Link to={`${AppRoute.AdministratorArea}/news`}>администратора</Link>
        </p>
      )}
    </section>
  );
};

export default Banners;
