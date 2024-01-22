import css from "./styles.module.scss";
import EmptyTemplate from "../EmptyTemplate";
import Button from "../../../../../components/Button/Button";

import SelectFilter from "../../../../../components/Select";
import { halls, lessons, times } from "../../../../../mocks/mocks";

const OnlineRecovery = () => {
  const filtersTitle = ["Выбор зала", "Выбор занятия", "Выбор времени"];
  const record = true;
  return (
    <div className={css.wrapper}>
      {record ? (
        <>
          <div className={css.filters}>
            {filtersTitle.map((title) => {
              let data: string[] = [];
              if (title === "Выбор зала") {
                data = halls;
              }
              if (title === "Выбор занятия") {
                data = lessons;
              }
              if (title === "Выбор времени") {
                data = times;
              }
              return <SelectFilter key={title} title={title} data={data} />;
            })}
          </div>

          <Button text="Записаться" cls="btn-rec" />
        </>
      ) : (
        <EmptyTemplate>
          <p>
            Для того чтобы записаться на занятие Вам необходимо приобрести
            абонемент.
          </p>
        </EmptyTemplate>
      )}
    </div>
  );
};

export default OnlineRecovery;
