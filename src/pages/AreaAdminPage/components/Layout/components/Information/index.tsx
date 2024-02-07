import ControlButton from "../../../../../../components/controls-button";
import css from "./styles.module.scss";

const LegalInformation = () => {
  return (
    <>
      <h2>Юридическая информация</h2>
      <div className={css.container}>
        <div className={css.document}>
          <div className={css.file}>
            Условия использования и Политика конфиденциальности
          </div>
          <div className={css.controlGroup}>
            <ControlButton id="delete" />
            <ControlButton id="delete" />
          </div>
        </div>
        <div className={css.document}>
          <div className={css.file}>
            Условия использования и Политика конфиденциальности Условия использования и Политика конфиденциальности
          </div>
          <div className={css.controlGroup}>
            <ControlButton id="delete" />
            <ControlButton id="delete" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalInformation;
