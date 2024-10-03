import classNames from 'classnames';
import EmptyTemplate from '../../../components/empty-template';

const titles = [
  'Абонемент',
  'Дата покупки',
  'Дата начала',
  'Дата окончания',
  'Посетил занятий',
  'Состояние'
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
    dateOfPurchase: '01.10.23',
    startDate: '02.10.23',
    endDate: '02.11.23',
    usedClasses: 5,
    totalClasses: 12,
    status: 'Активный'
  },
  {
    id: 2,
    dateOfPurchase: '01.10.23',
    startDate: '02.10.23',
    endDate: '02.11.23',
    usedClasses: 5,
    totalClasses: 12,
    status: 'Неактивный'
  },
  {
    id: 3,
    dateOfPurchase: '01.10.23',
    startDate: '02.10.23',
    endDate: '02.11.23',
    usedClasses: 5,
    totalClasses: 12,
    status: 'Завершенный'
  }
];

const UserTicketsSlice = () => {
  const tickets = ticketsData;
  return (
    <div className='user-tickets grid grid--12'>
      {tickets.length > 0 ? (
        <table className='user-tickets__table'>
          <thead className='user-tickets__thead'>
            <tr>
              {titles.map((item) => (
                <th className='user-tickets__header' key={item}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='user-tickets__tbody'>
            {tickets.map(
              ({
                id,
                dateOfPurchase,
                startDate,
                endDate,
                usedClasses,
                totalClasses,
                status
              }) => {
                const classNamesList = classNames('user-tickets__row', {
                  'user-tickets__row--completed': status === 'Завершенный',
                  'user-tickets__row--non-active': status === 'Неактивный'
                });

                return (
                  <tr className={classNamesList} key={id}>
                    <td className='user-tickets__cell'>{id}</td>
                    <td className='user-tickets__cell'>{dateOfPurchase}</td>
                    <td className='user-tickets__cell'>{startDate}</td>
                    <td className='user-tickets__cell'>{endDate}</td>
                    <td className='user-tickets__cell'>
                      {usedClasses}/{totalClasses}
                    </td>
                    <td className='user-tickets__cell'>{status}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      ) : (
        <EmptyTemplate>
          <p>У Вас ещё нет абонементов.</p>
          <p>
            Для приобритения обратитесь в студию по адресу: Южно-Сахалинск,
            Коммунистический проспект, 20, с 09:00 до 21:00 или запишитесь на пробное
            занятие по телефону: <a href='tel:+74957887750'>+7 (495) 788-77-50</a>
          </p>
        </EmptyTemplate>
      )}
    </div>
  );
};

export default UserTicketsSlice;
