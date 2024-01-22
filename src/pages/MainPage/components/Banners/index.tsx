import SliderBlock from "../../../../components/Slider/SliderBlock";
import { useAppSelector } from "../../../../services/type-service";
import css from "./styles.module.scss";

const Banners = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const bannerUrl = main?.Banners;

  return (
    <section className={css.banners}>
      <SliderBlock cards={bannerUrl} />
    </section>
  );
};

export default Banners;
