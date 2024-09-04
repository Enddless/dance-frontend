export const NotificationsControl = () => {
  return (
    <div className='settings'>
      <input type='checkbox' name='selectedAll' id='selectedAll' className='checkbox' />
      <div className='fake'></div>
      <label htmlFor='selectedAll'>Выделить все</label>

      <input type='checkbox' name='read' id='read' />
      <label htmlFor='read'>Пометить прочитанным</label>

      <input type='checkbox' name='delete' id='delete' />
      <label htmlFor='delete'>Удалить</label>
    </div>
  );
};
