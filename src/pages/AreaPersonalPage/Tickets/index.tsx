import Spinner from "../../../components/Spinner";
import { useAppSelector } from "../../../services/type-service";
import css from "./styles.module.scss";

const titles = [
  "Абонемент",
  "Дата покупки",
  "Дата начала",
  "Дата окончания",
  "Посетил занятий",
  "Состояние",
];

interface ITicketsData {
  id: number;
  dateOfPurchase: string;
  startDate: string;
  endDate: string;
  usedClasses: number;
  totalClasses: number;
  status: string;
}

const ticketsData: ITicketsData[] = [
  {
    id: 1,
    dateOfPurchase: "01.10.23",
    startDate: "02.10.23",
    endDate: "02.11.23",
    usedClasses: 5,
    totalClasses: 12,
    status: "Активный",
  },
  {
    id: 2,
    dateOfPurchase: "01.10.23",
    startDate: "02.10.23",
    endDate: "02.11.23",
    usedClasses: 5,
    totalClasses: 12,
    status: "Неактивный",
  },
  {
    id: 3,
    dateOfPurchase: "01.10.23",
    startDate: "02.10.23",
    endDate: "02.11.23",
    usedClasses: 5,
    totalClasses: 12,
    status: "Завершенный",
  },
];

const Tickets = () => {
  const tickets = useAppSelector((state) => state.user.userTickets);
  console.log(tickets);
  if (!tickets) {
    return <Spinner />;
  }
  return (
    <div className={css.container}>
      <table className={css.ticketsTable}>
        <thead>
          <tr className={css.tableTitle}>
            {titles.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ticketsData.map(
            ({
              id,
              dateOfPurchase,
              startDate,
              endDate,
              usedClasses,
              totalClasses,
              status,
            }) => (
              <tr className={css.tableRow} key={id}>
                <td>{id}</td>
                <td>{dateOfPurchase}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>
                  {usedClasses}/{totalClasses}
                </td>
                <td>{status}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tickets;
