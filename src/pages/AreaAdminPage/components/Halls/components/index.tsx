import css from "./style.module.scss";

interface IActiveButtonProps {
  isActiveButton: string;
}

function LayoutHalls({ isActiveButton }: IActiveButtonProps) {
  return <div className={css.layout}>{isActiveButton}</div>;
}

export default LayoutHalls;
