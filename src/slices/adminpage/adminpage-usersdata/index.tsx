import Button from '../../../components/button';
import sprite from 'public/icons/sprite.svg';

const ControlUsersSlice = () => {
  return (
    <div className='admin-page__usersData'>
      <div className='admin-page__usersData-toolbar'>
        <div className='admin-page__usersData-buttonContainer'>
          <Button text='Пользователи' classList='btn-save' />
          <Button text='Запись' classList='btn-save' />
        </div>
        <form className='admin-page__usersData-searchForm searchForm'>
          <input type='search' id='search' name='search' placeholder='Найти' />
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='searchForm__iconSearch'>
            <use xlinkHref={`${sprite}#search`}></use>
          </svg>
        </form>
      </div>
      <div className='admin-page__usersData-content grid grid--12'>
        <table className='admin-page__usersData-table'>
          <thead>
            <tr>
              <th>Фамилия Имя</th>
              <th>Дата регистрации</th>
              <th>Состояние</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Иванов Иван</td>
              <td>21.08.2023</td>
              <td>Активен</td>
            </tr>
            <tr>
              <td>Васильева Мария</td>
              <td>15.08.2023</td>
              <td>Активен</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>

        <div className='admin-page__usersData-controlsButton'>
          <Button text='Добавить' classList='btn-save' />
          <Button text='Редактировать' classList='btn-reg' />
          <Button text='Удалить' classList='btn-more' />
        </div>
      </div>
    </div>
  );
};

export default ControlUsersSlice;
