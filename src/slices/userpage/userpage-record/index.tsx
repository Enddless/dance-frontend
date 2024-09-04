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
    <div className='user__record grid grid--12'>
      {record ? (
        <>
          <div className='user__record-filters'>
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

          <Button text='Записаться' cls='btn-rec' />
          <div className='user__record-content grid grid--12'>
            <h5 className='user__record-title'>Текущие записи</h5>
            <table className='user__record-table'>
              <thead>
                <tr>
                  {titles.map((item) => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lessonsData.map(({ id, startDate, time, lesson }) => {
                  return (
                    <tr className='user__record-table-row' key={id}>
                      <td>{startDate}</td>
                      <td>{time}</td>
                      <td>{lesson}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <EmptyTemplate>
          <p>Для того чтобы записаться на занятие Вам необходимо приобрести абонемент.</p>
        </EmptyTemplate>
      )}
    </div>
  );
};

export default UserRecordSlice;
