import { useState } from "react";
import Button from "../../components/Button/Button";
import Layout from "./Layout";
import css from "./styles.module.scss";

const AreaPersonalPage = () => {
  const nameButton = [
    "Основные настройки",
    "Мои абонементы",
    "Уведомления",
    "История посещений",
    "Онлайн запись",
    "Смена пароля",
    "Написать отзыв",
  ];
  const [isActiveButton, setIsActiveButton] = useState("Основные настройки");
  const openModalForm = (text: string) => {
    setIsActiveButton(text);
  };
  return (
    <div className={css.container}>
      <div className={css.btnGroup}>
        {nameButton.map((button) => {
          return (
            <Button
              key={button}
              text={button}
              cls="menuAreaButton"
              activeClass={`${isActiveButton === button ? "active" : ""}`}
              openModalForm={() => openModalForm(button)}
            />
          );
        })}
      </div>
      {isActiveButton && <Layout isActiveButton={isActiveButton}/>}
    </div>
  );
};

export default AreaPersonalPage;
