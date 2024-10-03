import { useState } from 'react';
import { notificationData } from '../../../mocks/mocks';

const UserNotificationsSlice = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const handleCheckboxChange = (id: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (checkedItems.has(id)) {
      newCheckedItems.delete(id);
    } else {
      newCheckedItems.add(id);
    }
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className='user-notifications'>
      <div className='user-notifications__settings'>
        <input
          type='checkbox'
          name='selectedAll'
          id='selectedAll'
          className='user-notifications__checkbox'
        />
        <div className='user-notifications__fake'></div>
        <label htmlFor='selectedAll' className='user-notifications__label'>
          Выделить все
        </label>

        <input
          type='checkbox'
          name='read'
          id='read'
          className='user-notifications__checkbox'
        />
        <label htmlFor='read' className='user-notifications__label'>
          Пометить прочитанным
        </label>

        <input
          type='checkbox'
          name='delete'
          id='delete'
          className='user-notifications__checkbox'
        />
        <label htmlFor='delete' className='user-notifications__label'>
          Удалить
        </label>
      </div>
      <div className='user-notifications__list'>
        {notificationData.map((item) => {
          const id = `notification${item.id}`;
          const isChecked = checkedItems.has(id);

          const day = `${item.date.getDate()}.${
            item.date.getMonth() + 1
          }.${item.date.getFullYear()}`;
          const time = `${item.date.getHours()}:${item.date.getMinutes()}`;
          return (
            <li className='user-notifications__notification grid grid--12' key={item.id}>
              <div className='user-notifications__notification-item'>
                <label htmlFor={id} className='user-notifications__label '>
                  <input
                    type='checkbox'
                    name={id}
                    id={id}
                    className='user-notifications__checkbox'
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(id)}
                  />
                  <span className='user-notifications__fake'></span>
                  <span className='user-notifications__text'>{item.text}</span>
                </label>
              </div>
              <div className='user-notifications__time'>
                {day} {time}
              </div>
            </li>
          );
        })}
      </div>

      <div className='user-notifications__subscribe'>
        <p className='user-notifications__subscribe-text'>
          Получение уведомлений на почту
        </p>
        <div className='user-notifications__input-group'>
          <input
            type='radio'
            name='radio'
            id='onRadio'
            className='user-notifications__radio radio'
            defaultChecked
          />
          <label htmlFor='onRadio' className='user-notifications__radiolabel radioLabel'>
            Включить
          </label>

          <input
            type='radio'
            name='radio'
            id='offRadio'
            className='user-notifications__radio radio'
          />
          <label
            htmlFor='offRadio'
            className='user-notifications__radio-label radioLabel'>
            Выключить
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserNotificationsSlice;
