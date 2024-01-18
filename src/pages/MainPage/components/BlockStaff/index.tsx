import SliderBlock from "../../../../components/Slider/SliderBlock";
import TitleSection from "../../../../components/Title/Title";
import { StaffInfo } from "../../../../mocks/mocks";
import css from './styles.module.scss';

const StaffPage = () => {
  return (
    <section className={css.personal}>
      <TitleSection title="Персонал" />
      <SliderBlock staffInfo={StaffInfo} />;
    </section>
  );
};

export default StaffPage;
