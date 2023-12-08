import Button from "../../../../components/Button/Button";
import { pricesInfo } from "../../../../mocks/mocks";
import LayoutPrice from "./Layout";
import css from "./styles.module.scss";
import {useEffect, useState, useRef} from 'react';

const PriceSettings = () => {
  const [isActiveButton, setIsActiveButton] = useState("");
  const [isLayoutVisible, setIsLayoutVisible] = useState(false);
  const layoutRef = useRef<HTMLInputElement>(null);
  const openModalForm = (text: string) => {
    setIsActiveButton(text);
    setIsLayoutVisible(true);
  };
  const handleClickOutside = (event: Event) => {
    if (
      layoutRef.current &&
      event.target &&
      !layoutRef.current.contains(event.target as Node)
    ) {
      setIsLayoutVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={css.container}>
    <div className={css.listGroup}>
      <ul>
        {pricesInfo.map((item) => {
          return (
            <li key={item.id} onClick={() => openModalForm(item.title)}>
              {item.title}
            </li>
          );
        })}
      </ul>
      <Button text="Добавить" cls="menuAreaButton" activeClass="active" />
      </div>
      {isLayoutVisible && (
        <div ref={layoutRef} className={css.layout}>
          <LayoutPrice isActiveButton={isActiveButton} />
        </div>
      )}
    </div>
  );
};

export default PriceSettings;
