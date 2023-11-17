import { useState } from "react";
import Layout from "./components/Layout";
import css from "./styles.module.scss";
import Logo from "../../components/Logo/Logo";
const AreaAdminPage = () => {
  const menu = [
    "О студии",
    "Услуги и цены",
    "Расписание",
    "Отзывы",
    "Контакты",
    "Управление пользователями",
    "Настройки"
  ];
  const [isActiveButton, setIsActiveButton] = useState("О студии");
  const openModalForm = (text: string) => {
    setIsActiveButton(text);
  };
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <Logo />
        <ul>
          {menu.map((item) => {
            return (
              <li key={item} onClick={() => openModalForm(item)} className={css.menuItem}>
                {item}
              </li>
            );
          })}
        </ul>
      </aside>

      {isActiveButton && <Layout isActiveButton={isActiveButton} />}
    </div>
  );
};

export default AreaAdminPage;
