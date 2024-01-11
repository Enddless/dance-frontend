import ControlButton from "../../../../../../../components/controls-button";
import { hallsData } from "../../../../../../../const/const";
import css from "./style.module.scss";
interface IActiveButtonProps {
  isActiveButton: string;
}

function LayoutHalls({ isActiveButton }: IActiveButtonProps) {
  const findCardInfo = hallsData.find((item) => item.name === isActiveButton);
  if (!findCardInfo) return false;
  return (
    <div className={css.wrapper}>
      <ControlButton id="edit"/>
      <ControlButton id="delete"/>
      <ControlButton id="close"/>
      <div className={css.content}>
        <img src={findCardInfo.url} alt={findCardInfo.name} />
        <p className={css.description}>{findCardInfo.description}</p>
      </div>
    </div>
  );
}

export default LayoutHalls;
