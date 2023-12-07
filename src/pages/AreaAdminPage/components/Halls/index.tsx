import { useState } from "react";
import Button from "../../../../components/Button/Button";
import LayoutHalls from "./components";
import css from "./styles.module.scss";

const Halls = () => {
  const hallsName = ["Зал 1", "Зал 2", "Зал 3"];
  const [isActiveButton, setIsActiveButton] = useState("Зал 1");
  const openModalForm = (text: string) => {
    setIsActiveButton(text);
  };
  return (
    <div className={css.container}>
      <div className={css.listGroup}>
        <ul>
          {hallsName.map((item) => {
            return (
              <li key={item} onClick={() => openModalForm(item)}>
                {item}
              </li>
            );
          })}
        </ul>

        <Button text="Добавить" cls="menuAreaButton" activeClass="active" />
      </div>
      {isActiveButton && <LayoutHalls isActiveButton={isActiveButton}/>}
    </div>
  );
};

export default Halls;
