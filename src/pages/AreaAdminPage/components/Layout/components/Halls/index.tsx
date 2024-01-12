import css from "./styles.module.scss";
import Button from "../../../../../../components/Button/Button";
import { hallsData } from "../../../../../../mocks/mocks";
import CardHalls from "../../../../../../components/CardHalls";
import ControlButton from "../../../../../../components/controls-button";

const Halls = () => {
  return (
    <>
      <div className={css.container}>
        {hallsData.map((hall) => {
          return (
            <div className={css.card} key={hall.name}>
              <div className={css.controlGroup}>
                <ControlButton id="edit" />
                <ControlButton id="delete" />
              </div>
              <CardHalls hall={hall} />
            </div>
          );
        })}
      </div>
      <div className={css.add}>
        <Button text="Добавить" cls="add" />
      </div>
    </>
  );
};

export default Halls;
