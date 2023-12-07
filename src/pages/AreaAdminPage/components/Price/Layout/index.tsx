import css from "./style.module.scss";
import ControlsButton from "../../../../../components/controls-button";
import { pricesInfo } from "../../../../../mocks/mocks";
import Card from "../../../../../components/Card/Card";

interface IActiveButtonProps {
  isActiveButton: string;
}

function LayoutPrice({ isActiveButton }: IActiveButtonProps) {
  const findCardInfo = pricesInfo.find((item) => item.title === isActiveButton);
  if (!findCardInfo) return false;
  return (
    <div className={css.container}>
      <div className={css.controls}>
        <ControlsButton withCloseControl />
        <Card price={findCardInfo} />
      </div>
    </div>
  );
}

export default LayoutPrice;
