import SliderBlock from "../../../../components/Slider/SliderBlock";
import { StaffInfo } from "../../../../mocks/mocks";

const StaffPage = () => {
  return (
    <>
      <h1>Наши профессиональные педагоги</h1>
      <SliderBlock staffInfo={StaffInfo} />;
    </>
  );
};

export default StaffPage;
