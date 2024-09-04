import TitleSection from '../../components/title';
import BigCalendar from '../../components/full-calendar';

export const CalendarWithEventsSlice = () => {
  return (
    <section className='section full-calendar'>
      <TitleSection title='Расписание' cls='full-calendar__title' />
      <div className='dashboard'>
        <BigCalendar />
      </div>
    </section>
  );
};
