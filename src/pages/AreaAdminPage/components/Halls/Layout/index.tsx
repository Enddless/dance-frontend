import { hallsData } from "../../../../../const/const";
import css from "./style.module.scss";
import ControlsButton from "../../../../../components/controls-button";
interface IActiveButtonProps {
  isActiveButton: string;
}

function LayoutHalls({ isActiveButton }: IActiveButtonProps) {
  const findCardInfo = hallsData.find((item) => item.name === isActiveButton);
  if (!findCardInfo) return false;
  return (
    <div className={css.container}>
      <ControlsButton withCloseControl/>
      <div className={css.content}>
        <img src={findCardInfo.url} alt={findCardInfo.name} />
        <p>{findCardInfo.description}</p>
      </div>
    </div>
  );
}

export default LayoutHalls;
