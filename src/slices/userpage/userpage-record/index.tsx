import EmptyTemplate from '../../../components/empty-template';
import Button from '../../../components/button';

import SelectFilter from '../../../components/select';
import { halls, lessons, times } from '../../../mocks/mocks';

const titles = ['Дата', 'Время', 'Занятие'];

interface ILessonsData {
  id: number;
  startDate: string;
  time: string;
  lesson: string;
}

const lessonsData: ILessonsData[] = [
  {
    id: 1,
    startDate: '02.10.23',
    time: '09:00',
    lesson: 'Занятие 1'
  },
  {
    id: 2,
    startDate: '02.10.23',
    time: '12:00',
    lesson: 'Занятие 2'
  },
  {
    id: 3,
    startDate: '02.10.23',
    time: '18:00',
    lesson: 'Занятие 3'
  }
];

const UserRecordSlice = () => {
  const filtersTitle = ['Выбор занятия', 'Выбор времени'];
  const record = true;
  return (
    <div className='user-record grid grid--12'>
      {record ? (
        <>
          <div className='user-record__filters'>
            {filtersTitle.map((title) => {
              let data: string[] = [];
              if (title === 'Выбор зала') {
                data = halls;
              }
              if (title === 'Выбор занятия') {
                data = lessons;
              }
              if (title === 'Выбор времени') {
                data = times;
              }
              return <SelectFilter key={title} title={title} data={data} />;
            })}
          </div>

          <Button text='Записаться' classList='user-record__button button--record' />
          <div className='user-record__content grid grid--12'>
            <h5 className='user-record__title'>Текущие записи</h5>
            <table className='user-record__table'>
              <thead>
                <tr className='user-record__table-header'>
                  {titles.map((item) => (
                    <th className='user-record__table-header-cell' key={item}>
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lessonsData.map(({ id, startDate, time, lesson }) => {
                  return (
                    <tr className='user-record__table-row' key={id}>
                      <td className='user-record__table-cell'>{startDate}</td>
                      <td className='user-record__table-cell'>{time}</td>
                      <td className='user-record__table-cell'>{lesson}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <EmptyTemplate>
          <p className='user-record__empty-message'>
            Для того чтобы записаться на занятие Вам необходимо приобрести абонемент.
          </p>
        </EmptyTemplate>
      )}
    </div>
  );
};

export default UserRecordSlice;
