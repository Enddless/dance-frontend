import SliderBlock from "../../../../components/Slider/SliderBlock";
import { useAppSelector } from "../../../../services/type-service";
// import { StaffInfo } from "../../../../mocks/mocks";

const StaffPage = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const StaffInfo = main?.Teachers;

  return (
    <>
      <h1>Наши профессиональные педагоги</h1>
      <SliderBlock staffInfo={StaffInfo} />;
    </>
  );
};

export default StaffPage;
