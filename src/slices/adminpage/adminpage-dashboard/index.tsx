import Button from '../../../components/button';
import BigCalendar from '../../../components/full-calendar';

const DashboardSettingsSlice = () => {
  return (
    <div className='admin-page__dashboard'>
      <div className='admin-page__dashboard-buttonGroup'>
        <Button text='Все' cls='dashboardMenuAdmin' />
        <Button text='Зал 1' cls='dashboardMenuAdmin' />
        <Button text='Зал 2' cls='dashboardMenuAdmin' />
        <Button text='Зал 3' cls='dashboardMenuAdmin' />
      </div>
      <BigCalendar />
    </div>
  );
};

export default DashboardSettingsSlice;
