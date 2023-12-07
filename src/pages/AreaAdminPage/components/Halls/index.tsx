import { useEffect, useRef, useState } from "react";
import Button from "../../../../components/Button/Button";
import LayoutHalls from "./components";
import css from "./styles.module.scss";
import { hallsData } from "../../../../const/const";

const Halls = () => {
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
          {hallsData.map((item) => {
            return (
              <li key={item.id} onClick={() => openModalForm(item.name)}>
                {item.name}
              </li>
            );
          })}
        </ul>

        <Button text="Добавить" cls="menuAreaButton" activeClass="active" />
      </div>
      {isLayoutVisible && (
        <div ref={layoutRef}>
          <LayoutHalls isActiveButton={isActiveButton} />
        </div>
      )}
    </div>
  );
};

export default Halls;
