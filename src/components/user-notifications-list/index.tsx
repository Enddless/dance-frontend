import { useState } from 'react';
import { notificationData } from '../../mocks/mocks';

export const UserNotificationsList = () => {
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
    <div className='user__notifications-list'>
      {notificationData.map((item) => {
        const id = `notification${item.id}`;
        const isChecked = checkedItems.has(id);

        const day =
          item.date.getDate() +
          '.' +
          item.date.getMonth() +
          '.' +
          item.date.getFullYear();
        const time = item.date.getHours() + ':' + item.date.getMinutes();
        return (
          <li className='notificationContainer' key={item.id}>
            <div className='notificationItem'>
              <label htmlFor={id}>
                <input
                  type='checkbox'
                  name={id}
                  id={id}
                  className='checkbox'
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(id)}
                />
                <span className='fake'></span>
                <span className='text'>{item.text}</span>
              </label>
            </div>
            <div className='time'>
              {day} {time}
            </div>
          </li>
        );
      })}
    </div>
  );
};
