import SliderBlock from "../../../../components/Slider/SliderBlock";
import { useAppSelector } from "../../../../services/type-service";
// import { StaffInfo } from "../../../../mocks/mocks";
import css from './styles.module.scss'
import TitleSection from "../../../../components/Title/Title";

const StaffPage = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const StaffInfo = main?.Teachers;

  return (
    <section className={css.personal}>
      <TitleSection title="Персонал" />
      <SliderBlock staffInfo={StaffInfo} />
    </section>
  );
};

export default StaffPage;
