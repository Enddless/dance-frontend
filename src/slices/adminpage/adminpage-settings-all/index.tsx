const SettingsAllSlice = () => {
  return (
    <div className='admin-page__settings'>
      <h2>Темы</h2>
      <p>Текущая тема:</p>
      <div className='admin-page__settings-theme admin-page__settings-seventhTheme admin-page__settings-currentTheme'>
        <div className='admin-page__settings-tile'></div>
        <div className='admin-page__settings-tile'></div>
        <div className='admin-page__settings-tile'></div>
        <div className='admin-page__settings-tile'></div>
        <div className='admin-page__settings-tile'></div>
        <div className='admin-page__settings-tile'></div>
        <div className='admin-page__settings-tile'></div>
      </div>
      <p>Чтобы применить другую тему нажмите на нее</p>
      <div className='admin-page__settings-new'>
        <div className='admin-page__settings-theme admin-page__settings-secondaryTheme'>
          <div className='admin-page__settings-tile'></div>
          <div className='admin-page__settings-tile'></div>
          <div className='admin-page__settings-tile'></div>
          <div className='admin-page__settings-tile'></div>
          <div className='admin-page__settings-tile'></div>
          <div className='admin-page__settings-tile'></div>
          <div className='admin-page__settings-tile'></div>
        </div>
      </div>

      <h2>Разделы</h2>
      <div className='admin-page__settings-pages'>
        <div className='admin-page__settings-page'>
          <h3>Главная страница</h3>
          <p className='admin-page__settings-pageitem'>О студии</p>
          <p className='admin-page__settings-pageitem'>Персонал</p>
          <p className='admin-page__settings-pageitem'>Услуги и цены</p>
          <p className='admin-page__settings-pageitem'>Отзывы</p>
          <p className='admin-page__settings-pageitem'>Контакты</p>
        </div>
        <div className='admin-page__settings-pageitem'>
          <h3>Расписание</h3>
        </div>
        <div className='admin-page__settings-pageitem'>
          <h3>Отзывы</h3>
        </div>
      </div>
    </div>
  );
};

export default SettingsAllSlice;
