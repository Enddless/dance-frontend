import Button from "../../../../../../components/Button/Button";
import CardPrice from "../../../../../../components/CardPrice";
import ControlButton from "../../../../../../components/controls-button";
import { pricesInfo } from "../../../../../../mocks/mocks";
import DescriptionPrice from "./component/Description";
import css from "./styles.module.scss";

const PriceSettings = () => {
  return (
    <>
      <div className={css.container}>
        {pricesInfo.map((item) => {
          return (
            <div className={css.card} key={item.title}>
              <div className={css.controlGroup}>
                <ControlButton id="edit" />
                <ControlButton id="delete" />
              </div>
              <CardPrice price={item} cls="noneShadow"/>
            </div>
          );
        })}
      </div>

      <div className={css.add}>
        <Button text="Добавить" cls="add" />
      </div>
      <DescriptionPrice />
    </>
  );
};

export default PriceSettings;
