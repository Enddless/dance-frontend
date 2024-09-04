export const UserSubscribe = () => {
  return (
    <div className='subscribe'>
      <p>Получение уведомлений на почту</p>
      <div className='inputGroup'>
        <input
          type='radio'
          name='radio'
          id='onRadio'
          className='checkbox'
          defaultChecked
        />
        <label htmlFor='onRadio' className='radioLabel'>
          Включить
        </label>

        <input type='radio' name='radio' id='offRadio' className='checkbox' />
        <label htmlFor='offRadio' className='radioLabel'>
          Выключить
        </label>
      </div>
    </div>
  );
};
