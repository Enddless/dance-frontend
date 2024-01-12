import { StaffInfo } from "../../../../../../mocks/mocks";
import css from "./styles.module.scss";
import ControlButton from "../../../../../../components/controls-button";
const Personal = () => {
  return (
    <div className={css.container}>
      {StaffInfo.map(({ name, img, description, id }) => (
        <div key={id} className={css.staffContainer}>
          <div className={css.controlGroup}>
            <ControlButton id="edit" />
            <ControlButton id="delete" />
          </div>
          <div className={css.staffInfo}>
            <div className={css.avatar}>
              <img src={img} alt="staffPhoto" />
            </div>

            <div className={css.staffDescr}>
              <h6>{name}</h6>
              <p>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personal;
