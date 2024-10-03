import Button from '../../../components/button';
import BigCalendar from '../../../components/full-calendar';

const DashboardSettingsSlice = () => {
  return (
    <div className='admin-page__dashboard'>
      <div className='admin-page__dashboard-buttonGroup'>
        <Button text='Все' classList='dashboardMenuAdmin' />
        <Button text='Зал 1' classList='dashboardMenuAdmin' />
        <Button text='Зал 2' classList='dashboardMenuAdmin' />
        <Button text='Зал 3' classList='dashboardMenuAdmin' />
      </div>
      <BigCalendar />
    </div>
  );
};

export default DashboardSettingsSlice;
